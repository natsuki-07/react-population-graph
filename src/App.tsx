import React from 'react'
import PrefectureSelect from './components/molecules/PrefectureSelect'
import LineGraph from './components/molecules/LineGraph'
import Header from './components/atoms/Header'
import useSelectedPrefectures from './hooks/useSelectedPrefectures'

const App: React.FunctionComponent = () => {
  const { selectedPrefectures, handleChange, populationData } =
    useSelectedPrefectures()
  return (
    <>
      <Header></Header>
      <PrefectureSelect
        selectedPrefectures={selectedPrefectures}
        handleChange={handleChange}
      />
      <LineGraph populationData={populationData} />
    </>
  )
}

export default App
