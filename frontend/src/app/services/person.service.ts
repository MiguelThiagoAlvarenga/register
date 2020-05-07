import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from "../../environments/environment";

@Injectable()
export class PersonService {

  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.url}/person/getAll`);
  }

  save(person) {
    return this.http.post(`${this.url}/person/add`, person);
  }

  getByCpf(cpf) {
    return this.http.get(`${this.url}/person/getByCpf/${cpf}`);
  }

  getByBirthDate(birthDate) {
    return this.http.get(`${this.url}/person/getByBirthDate/${birthDate}`);
  }

  getByCounty(idCounty) {
    return this.http.get(`${this.url}/person/getByCounty/${idCounty}`);
  }

  getByName(name) {
    return this.http.get(`${this.url}/person/getByName/${name}`);
  }

  getByState(idState) {
    return this.http.get(`${this.url}/person/getByState/${idState}`);
  }

  async getById(id) {
    return await this.http.get(`${this.url}/person/getById/${id}`).toPromise();
  }

  delete(id) {
    return this.http.delete(`${this.url}/person/delete/${id}`, { responseType: 'text' });
  }
}
