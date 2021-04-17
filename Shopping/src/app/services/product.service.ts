import { Injectable } from '@angular/core';
import { Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product []> ('https://localhost:44337/api/product');
  }

}
