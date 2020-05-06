import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  urlState = environment.serverUrl + '/state';

  constructor(
    private http: HttpClient
  ) {}

  getAll() {
    return this.http.get(`${this.urlState}/getAll`).toPromise();
  }
  getByInitials(initials){
    return this.http.get(`${this.urlState}/getByInitials/${initials}`)
  }
}
