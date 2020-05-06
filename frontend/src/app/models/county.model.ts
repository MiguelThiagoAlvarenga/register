import {StateModel} from "./state.model";

export class CountyModel {
  constructor(
    public id: number,
    public name?: string,
    public state?: StateModel
  ) {}
}
