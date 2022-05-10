import { Component, OnInit } from '@angular/core';
import { PREMADES } from 'src/app/premadePizzaList';
import { OTHERMENU } from '../OtherMenuItems';
import { Pizza } from 'src/app/pizza';
import {ShoppingCartService} from '../shopping-cart.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [ShoppingCartService]
})
export class MainPageComponent implements OnInit {
  lister: Pizza[] = PREMADES;
  otherMenu: any[] = OTHERMENU;
 

  displayMain: boolean = true;
  displayDeal: boolean = false;
  displayPizzaBuilder: boolean = false;
  displayCart: boolean = false;
  shoppingCart: string = 'https://cdn2.iconfinder.com/data/icons/shopping-cart-16/64/Shopping_Cart-01-512.png';
  constructor(private serShopping: ShoppingCartService) { }
  

  ngOnInit(): void {
  }

  total: any = this.serShopping.getCartPrice()

  showMainPage(){
    this.displayMain = true;
    this.displayDeal = false;
    this.displayPizzaBuilder = false;
    this.displayCart = false;
  }
  showDeals(){
    this.displayMain = false;
    this.displayDeal = true;
    this.displayPizzaBuilder = false;
    this.displayCart = false;
  }
  showCart(){
    this.displayMain = false;
    this.displayDeal = false;
    this.displayPizzaBuilder = false;
    this.displayCart = true;
  }
  showBuilder(){
    this.displayMain = false;
    this.displayDeal = false;
    this.displayPizzaBuilder = true;
    this.displayCart = false;
  }
  
 


}
