import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService} from '../services/cart.service';
import { Product} from '../models/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartProducts : Product[] = []

  constructor(private cartservice: CartService, private router: Router) {}

  

  ngOnInit(): void {
    this.cartProducts = this.cartservice.fetchCart();
  }

  buyNow(): void{
    this.cartservice.setCart(this.cartProducts);
    this.router.navigate(['cart/status']);
  }

}
