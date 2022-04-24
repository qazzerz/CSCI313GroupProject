import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from'../../shopping-cart.service';
import {PREMADES} from '../../premadePizzaList'
import {Pizza} from '../../pizza'

@Component({
  selector: 'app-shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.css'],
  providers: [ShoppingCartService]
})
export class ShoppingCartCardComponent implements OnInit {
  cartList: any[]= [];
  testaddItem:Pizza []= PREMADES;
  total:number=0;

  constructor(private cartListService:ShoppingCartService) { }

  ngOnInit(): void {
    this.cartList=this.cartListService.getCartList();
    
  }
  testItem(){
    this.cartListService.addPizza(this.testaddItem[1]);
    this.AddToTotal(this.testaddItem[1].price.valueOf());
    console.log(this.total)
  }

  AddToTotal(newNum:number){
    return (this.total = this.total + newNum);
  }
}
