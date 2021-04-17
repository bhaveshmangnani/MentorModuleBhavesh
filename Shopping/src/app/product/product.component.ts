import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products !: Product[];
  private subs : Subscription[] = [];

  public cart = new Set();

  constructor( private productservice: ProductService) { }

  ngOnInit(): void {

    var sub1  = this.productservice.fetchProducts().subscribe(
      res => {this.products = res; },
      error => { console.log(error); }
    );
    this.subs.push(sub1)
  }


  ngOnDestroy(): void{
    this.subs.forEach( (sub) =>{
      sub.unsubscribe();
    }

    );
    
  }

  addToCart(product: Product)
  {
    this.cart.add(product);
  }

}
