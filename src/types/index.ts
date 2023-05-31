export interface Prefecture {
  prefCode: number
  prefName: string
}
export interface Series {
  type: string
  name: string
  data: Array<{
    year: string
    value: string
  }>
}
export interface PopulationData {
  type: string
  name: string
  data: Array<Data<string>>
}

interface Data<T> {
  year: T;
  value: T;
}