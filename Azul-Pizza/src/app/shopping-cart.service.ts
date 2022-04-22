import { Injectable } from '@angular/core';
import {Pizza} from './pizza'

@Injectable({
  providedIn: 'root'
})

// to inject service into a component 
//import {ShoppingCartService} from './shopping-cart.service'
//and add it as a providers[ShoppingCartService] in the component section
// constructor(private serShopping: this.ShoppingCartService) { }
//then you can call the service methods
export class ShoppingCartService {
  shoppingCartList: Pizza[]=[];
  constructor() { }

  getCartList(){
    return this.shoppingCartList;
  }
  getCartLengh(){
    return this.shoppingCartList.length;
  }
  addPizza(newPizza:Pizza){
    this.shoppingCartList.push(newPizza);
  }
  removePizza(remPizza:Pizza){
    const index = this.shoppingCartList.indexOf(remPizza, 0);
      if (index > -1) {
        this.shoppingCartList.splice(index, 1);
      }
  }
}
