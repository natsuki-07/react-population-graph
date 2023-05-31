import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import type { Series } from '../../types/index'
interface Props {
  populationData: Series[]
}

const LineGraph: React.FC<Props> = ({ populationData }) => {
  const categories: string[] = []
  populationData.length > 0 &&
    populationData[0].data.map((d) => categories.push(d.year))
  const series: Highcharts.SeriesOptionsType[] = populationData.map((data) => {
    const population: string[] = []
    data.data.map((d) => population.push(d.value))
    return {
      type: 'line',
      name: data.name,
      data: population,
    }
  })

  const options: Highcharts.Options = {
    title: {
      text: '総人口推移',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    plotOptions: {
      series: {
        compare: 'percent',
        showInNavigator: true,
      },
    },
    series:
      populationData.length === 0
        ? [{ type: 'line', name: '都道府県名', data: [] }]
        : series,
  }
  return (
    <div className="graph-container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default LineGraph
