import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(`${environment.baseApi}v1/users`);
  }

  AddUserAdmin(data: any) {
    return this.http.post(`${environment.baseApi}v1/users`,data);
  }

  EditUserAdmin(id: number, data: any) {
    return this.http.put(`${environment.baseApi}v1/users/${id}`,data);
  }
}
