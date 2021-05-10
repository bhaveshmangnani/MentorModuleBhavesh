import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private cartservice: CartService, private router: Router) { }

  ngOnInit(): void {
    var subs = this.cartservice.checkOut().subscribe(
      res =>{
        this.result = true;
        console.log("result = ", res);
      },
      error =>{
        this.error_message = error.error;
        console.log("Error in status = ",error);
      }
    );
    this.subscription.push(subs);

  }


  goToHome(): void{
    this.router.navigate([''])

  }

  ngOnDestroy()
  {
    this.subscription.forEach(element => {
      element.unsubscribe();
      
    });
  }

}
