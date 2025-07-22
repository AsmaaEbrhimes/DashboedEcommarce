import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { dataUser } from './Interface/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers():Observable<dataUser> {
    return this.http.get<dataUser>(`${environment.baseApi}v1/users`);
  }

  AddUserAdmin(data: any) {
    return this.http.post(`${environment.baseApi}v1/users`,data);
  }

  EditUserAdmin(id: number, data: any) {
    return this.http.put(`${environment.baseApi}v1/users/${id}`,data);
  }

  DeleteUserAdmin(id: string) {
    return this.http.delete(`${environment.baseApi}v1/users/${id}`);
  }
}
