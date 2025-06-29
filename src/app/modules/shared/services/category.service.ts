import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = 'https://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  /**
   * get all categries
   * @returns 
   */
  getCategories() {

    const endpoint = '${base_url}/categories';
    return this.http.get(endpoint);
  }
}
