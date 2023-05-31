import React, { ChangeEvent } from 'react'
import useFetchPrefectures from '../../hooks/useFetchPrefectures'
import type { Prefecture } from '../../types/index'
interface Props {
  selectedPrefectures: Prefecture[]
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const PrefectureSelect: React.FC<Props> = ({
  selectedPrefectures,
  handleChange,
}) => {
  const { prefectures } = useFetchPrefectures()
  return (
    <div className="prefecture-select">
      {prefectures.map((pref) => {
        return (
          <div
            className="prefecture-select__checkbox prefecture"
            key={pref.prefCode}
          >
            <input
              className="prefecture__checkbox"
              type="checkbox"
              id={`${pref.prefCode}`}
              name={pref.prefName}
              value={pref.prefCode}
              onChange={handleChange}
              checked={selectedPrefectures.some(
                (p) => p.prefCode === pref.prefCode
              )}
            />
            <label className="prefecture__label" htmlFor={`${pref.prefCode}`}>
              {pref.prefName}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default PrefectureSelect
