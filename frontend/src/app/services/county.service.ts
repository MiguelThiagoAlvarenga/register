import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountyService {
  urlCity = environment.serverUrl + '/county';

  constructor(
    private http: HttpClient
  ) {}

  getAll() {
    return this.http.get(`${this.urlCity}/getAll`).toPromise();
  }
  getByState(idState) {
    return this.http.get(`${this.urlCity}/getByState/${idState}`).toPromise();
  }
}
