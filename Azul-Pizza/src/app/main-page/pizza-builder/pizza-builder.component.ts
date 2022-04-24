import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pizza } from 'src/app/pizza';
import { CustomPizza } from 'src/app/pizza';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pizza-builder',
  templateUrl: './pizza-builder.component.html',
  styleUrls: ['./pizza-builder.component.css']
})
export class PizzaBuilderComponent implements OnInit {

  

  constructor() { 
    
  }
  @Input()
    toppings: string[] = [];
    topping: string = "";
    sauce: string = "";
    cheese: string = "";
    crust: string = "";

    custPizza = new CustomPizza();


   
pushToArray(top: string)
{
  this.toppings.push(top);
}




  ngOnInit(): void {
  }

}
