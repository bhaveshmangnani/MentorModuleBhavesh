import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  private subscription : Subscription[] = [];
  result: boolean = false;
  error_message: string = "";

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    var subs = this.cartservice.checkOut().subscribe(
      res =>{
        this.result = true;
      },
      error =>{
        this.error_message = error.error;
        console.log(error);
      }
    );
    this.subscription.push(subs);

  }

  ngOnDestroy()
  {
    this.subscription.forEach(element => {
      element.unsubscribe();
      
    });
  }

}
