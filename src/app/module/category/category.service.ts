import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryResponse } from './Interface';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  getCategories(): Observable<CategoryResponse> {
  return this.http.get<CategoryResponse>(`${environment.baseApi}v1/categories`);
}
}
