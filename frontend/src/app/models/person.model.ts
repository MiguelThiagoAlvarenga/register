import {AddressModel} from "./address.model";
import {ContactModel} from "./contact.model";

export class PersonModel {
  constructor(
    public id: number,
    public birthDate: Date,
    public cpf: string,
    public name: string,
    public address: AddressModel,
    public contact: ContactModel
  ) {}
}
