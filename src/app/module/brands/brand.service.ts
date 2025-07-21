import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { brandData } from './Interface';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  getAllBrands(): Observable<brandData> {
    return this.http.get<brandData>(`${environment.baseApi}v1/brands`);
  }

  AddBrandInDataBase(data: any) {
    return this.http.post(`${environment.baseApi}v1/brands`, data);
  }

  EditBrandInDataBase(data: any, id: string) {
    return this.http.put(`${environment.baseApi}v1/brands/${id}`, data);
  }
}
