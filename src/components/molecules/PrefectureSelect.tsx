import React, { Suspense, ChangeEvent } from 'react'
import PrefectureInput from '../atoms/PrefectureInput'
import PrefectureTitle from '../atoms/PrefectureTitle'
import type { Prefecture } from '../../types/index'
interface Props {
  selectedPrefectures: Prefecture[]
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const PrefectureSelect: React.FC<Props> = ({
  selectedPrefectures,
  handleChange,
}) => {
  return (
    <div className="prefecture-select">
      <PrefectureTitle />
      <Suspense>
        <PrefectureInput
          selectedPrefectures={selectedPrefectures}
          handleChange={handleChange}
        />
      </Suspense>
    </div>
  )
}

export default PrefectureSelect
