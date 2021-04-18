import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  private cart: Product[] = [];

  setCart(products: Product[]): void{
    this.cart = products;
  }

  fetchCart() : Product []{
    return this.cart;
  }

  checkOut() :Observable<any>
  {
    return this.http.post("https://localhost:44365/api/transact", {'products':this.cart});
  }

}
