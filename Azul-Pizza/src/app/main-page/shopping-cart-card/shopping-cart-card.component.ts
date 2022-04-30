import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from'../../shopping-cart.service';
import {PREMADES} from '../../premadePizzaList'
import {Pizza} from '../../pizza'

@Component({
  selector: 'app-shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.css'],
  
})
export class ShoppingCartCardComponent implements OnInit {
  cartList: any[]= [];
  testaddItem:Pizza []= PREMADES;
  subtotal:number=0;
  tax:number=0;
  total:number=0;

  constructor(private cartListService:ShoppingCartService) { }

  ngOnInit(): void {
    this.cartList = this.cartListService.getCartList();
   

    for(let l=0;l<this.cartList.length;l++){ //gernerating subtotals
      this.AddToTotal(this.cartList[l].price);
    }
    
  }
 

  AddToTotal(newNum:number){
    (this.subtotal = this.subtotal + newNum);
    (this.tax = 1*this.cartList.length);
    this.total= this.tax + this.subtotal;
  }

 
}
