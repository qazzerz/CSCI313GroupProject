import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pizza } from 'src/app/pizza';
import { CustomPizza } from 'src/app/pizza';


@Component({
  selector: 'app-pizza-builder',
  templateUrl: './pizza-builder.component.html',
  styleUrls: ['./pizza-builder.component.css']
})
export class PizzaBuilderComponent implements OnInit {

  constructor() { }

    topping: string[] = [];
    sauce: string = "";
    cheese: string = "";
    crust: string = "";

    custPizza = new CustomPizza();

onSubmit(from: NgForm)
{

}

  ngOnInit(): void {
  }

}
