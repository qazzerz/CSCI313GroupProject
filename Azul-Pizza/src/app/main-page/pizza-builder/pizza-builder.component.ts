import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pizza } from 'src/app/pizza';
import { CustomPizza } from 'src/app/pizza';
import { FormsModule } from '@angular/forms';
import {ShoppingCartService} from '../../shopping-cart.service'


@Component({
  selector: 'app-pizza-builder',
  templateUrl: './pizza-builder.component.html',
  styleUrls: ['./pizza-builder.component.css'],
  providers:[ShoppingCartService]
})
export class PizzaBuilderComponent implements OnInit {

  

  constructor(private serShopping: ShoppingCartService) { 
    
  }
  @Input()
    toppings: string[] = [];
    topping: string = "";
    sauce: string = "";
    cheese: string = "";
    crust: string = "";

    custPizza = new CustomPizza();
    customPizza: Pizza = {name: 'Custom Pizza',toppings: [''],sauce:'',
    cheese:'',crust:'',desciption:'',price: 14,img:''}


   
pushToArray(top: string)
{
  this.toppings.push(top);
}




  ngOnInit(): void {
  }
  createAddPizza(){
    
    this.serShopping.addPizza(this.customPizza)
    console.log(this.serShopping.shoppingCartList)
  }
}
