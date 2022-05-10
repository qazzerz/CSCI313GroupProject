import { Injectable } from '@angular/core';
import {Pizza} from './pizza'

@Injectable({
  providedIn: 'root'
})

// to inject service into a component 
//import {ShoppingCartService} from './shopping-cart.service'
//and add it as a providers[ShoppingCartService] in the component section
// constructor(private serShopping: ShoppingCartService) { }
//then you can call the service methods
export class ShoppingCartService {
  shoppingCartList: any[]=[];
  total: number =0.00;
  constructor() { }

  getCartList(){
    return this.shoppingCartList;
  }
  getCartLengh(){
    return this.shoppingCartList.length;
  }
  addItem(newAny:any){
    this.shoppingCartList.push(newAny);
    console.log(this.getCartList());
    this.getCartPrice();
  }
  getCartPrice(){
    for(let l=0;l<this.shoppingCartList.length;l++){ //gernerating subtotals
      this.total = this.total + (this.shoppingCartList[l].price);
    }
    return this.total
  }
  removeItem(remPizza:Pizza){
    const index = this.shoppingCartList.indexOf(remPizza, 0);
      if (index > -1) {
        this.shoppingCartList.splice(index, 1);
        
      }
      this.getCartPrice();
  }
  resetCart(){
    this.shoppingCartList = [];
  }
}
