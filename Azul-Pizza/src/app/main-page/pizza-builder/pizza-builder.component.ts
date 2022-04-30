import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pizza } from 'src/app/pizza';
import { CustomPizza } from 'src/app/pizza';
import { FormsModule } from '@angular/forms';
import {ShoppingCartService} from '../../shopping-cart.service'
import { Variable } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-pizza-builder',
  templateUrl: './pizza-builder.component.html',
  styleUrls: ['./pizza-builder.component.css'],
  
})
export class PizzaBuilderComponent implements OnInit {

  

  constructor(private shopSer: ShoppingCartService) { }
  @Input()
    toppings: string[] = [];


    pepperoni: boolean = false;
    italianSausage: boolean = false;
    bacon: boolean = false;
    meatball: boolean = false;
    ham: boolean = false;
    beef: boolean = false;
    pork: boolean = false;
    chicken: boolean = false;

    blackOlives: boolean = false;
    greenOlives: boolean = false;
    pineapple: boolean = false;
    onions: boolean = false;
    mushroom: boolean = false;
    bananaPeppers: boolean = false;
    greenPeppers: boolean = false;
    jalapenos: boolean = false;

    sauce: string = "";
    cheese: string = "";
    crust: string = "";
    //custPizza = new CustomPizza();
    customPizza: Pizza = {name: 'Custom Pizza: ',toppings: [''],sauce:'',
    cheese:'',crust:'',desciption:'',price: 12,img:''}
    
    
    
    
  onSubmit(){
    if(this.pepperoni)
    {
      this.toppings.push("Pepperoni");
    }
    if(this.italianSausage)
    {
      this.toppings.push("Italian Sausage");
    }
    if(this.bacon)
    {
      this.toppings.push("Bacon");
    }
    if(this.meatball)
    {
      this.toppings.push("Meatball");
    }
    if(this.ham)
    {
      this.toppings.push("Ham");
    }
    if(this.beef)
    {
      this.toppings.push("Beef");
    }
    if(this.pork)
    {
      this.toppings.push("Pork");
    }
    if(this.chicken)
    {
      this.toppings.push("Chicken");
    }
    if(this.blackOlives)
    {
      this.toppings.push("Black Olives");
    }
    if(this.greenOlives)
    {
      this.toppings.push("Green Olives");
    }
    if(this.pineapple)
    {
      this.toppings.push("Pineapple");
    }
    if(this.onions)
    {
      this.toppings.push("Onions");
    }
    if(this.jalapenos)
    {
      this.toppings.push("Jalapenos");
    }
    if(this.mushroom)
    {
      this.toppings.push("Mushrooms");
    }
    if(this.bananaPeppers)
    {
      this.toppings.push("Banana Peppers");
    }
    if(this.greenPeppers)
    {
      this.toppings.push("Green Peppers");
    }

    this.customPizza.toppings = this.toppings;

    this.customPizza.price += this.toppings.length;
    
    this.customPizza.name += "Crust: " + this.customPizza.crust + ", Sauce: " + this.customPizza.sauce + ", Cheese:  " + this.customPizza.cheese;
    
    if(this.toppings.length != 0){
      this.customPizza.name += ", Toppings:"
    }
    for(let topping of this.toppings){
      this.customPizza.name += " " + topping
    } 

    this.shopSer.addPizza(this.customPizza);

  }




  ngOnInit(): void {
  }
 
}
