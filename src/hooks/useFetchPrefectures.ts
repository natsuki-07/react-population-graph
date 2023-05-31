import { useEffect, useState } from 'react'
import axios from 'axios'
import type { Prefecture } from '../types/index'

const useFetchData = (): { prefectures: Prefecture[] } => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])

  useEffect(() => {
    (async () => {
      const results = await axios
        .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
          headers: { 'X-API-KEY': import.meta.env.VITE_API_KEY },
        })
      setPrefectures([...results.data.result])
    })().catch((error) => {
      alert('都道府県一覧の取得に失敗しました。')
      console.log(error);
      throw new Error(error)
    })
  }, [])
  return { prefectures }
}

export default useFetchData
