import {CountyModel} from "./county.model";

export class AddressModel {
  constructor(
    public id: number,
    public address: string,
    public neighborhood: string,
    public zipCode: string,
    public county: CountyModel
  ) {}
}
