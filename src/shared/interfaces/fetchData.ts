export interface IBreed {
  weight: [Object],
  id: string,
  name: string,
  origin: string,
  description: string,
  temperament: string
}

export interface ICats {
  id: string,
  url: string,
  width: number,
  height: number,
  breeds: IBreed[]
}
