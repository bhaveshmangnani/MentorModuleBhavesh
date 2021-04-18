import { Injectable } from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart: Product[] = [];

  setCart(products: Set<Product>): void{
    this.cart = Array.from(products);
  }

  fetchCart() : Product []{
    return this.cart;
  }
}
