import { useState } from 'react';
import type { Prefecture, PopulationData } from '../types/index'
import axios from 'axios';
const useSelectedPrefectures = (): { selectedPrefectures: Prefecture[], handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void; populationData: PopulationData[]; } => {
  const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>([]);
  const [populationData, setPopulationData] = useState<PopulationData[]>([])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (
      selectedPrefectures.some(
        (pref) => String(pref.prefCode) === e.target.value
      )
    ) {
        setSelectedPrefectures(
          selectedPrefectures.filter(
            (checkedValue) => String(checkedValue.prefCode) !== e.target.value
          )
        );
        setPopulationData(
          populationData.filter((data) => data.name !== e.target.name)
        );
      } else if (typeof e.target.name === 'string') {
        setSelectedPrefectures([
          ...selectedPrefectures,
          { prefCode: Number(e.target.value), prefName: e.target.name },
        ]);
        axios
        .get(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${e.target.value}`,
          {
            headers: { "X-API-KEY": import.meta.env.VITE_API_KEY },
          }
        )
        .then((results) => {
          setPopulationData([
            ...populationData,
            {
              type: 'line',
              name: e.target.name,
              data: results.data.result.data[0].data,
            },
          ]);
        })
        .catch((error) => {
          alert('都道府県一覧の取得に失敗しました。')
          console.log(error);
          throw new Error(error)
        });
      };
  }
  return { selectedPrefectures, handleChange, populationData };
};

export default useSelectedPrefectures
