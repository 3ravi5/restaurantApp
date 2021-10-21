import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  URL = 'http://localhost:3000/restaurants';
  regUrl = 'http://localhost:3000/users';

  constructor(private _http: HttpClient) {}
  getRestaurantList() {
    return this._http.get(this.URL);
  }
  addRest(data: any) {
    return this._http.post(this.URL, data);
  }
  deleteRest(id: any) {
    return this._http.delete(`${this.URL}/${id}`);
  }
  getCurrentData(id: any) {
    return this._http.get(`${this.URL}/${id}`);
  }
  updateRest(id: any, data: any) {
    return this._http.put(`${this.URL}/${id}`, data);
  }
  createUser(data:any){
    return this._http.post(this.regUrl, data);
  }
}
