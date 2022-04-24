import { Component, OnInit } from '@angular/core';
import { PREMADES } from 'src/app/premadePizzaList';
import { Pizza } from 'src/app/pizza';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  lister: Pizza[] = PREMADES;
  displayMain: boolean = true;
  displayDeal: boolean = false;
  displayPizzaBuilder: boolean = false;
  displayCart: boolean = false;
  x:number = 0;
  counter: number = this.x++;
  constructor() { }

  ngOnInit(): void {
  }

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
  setNumber(x:number){
    return x++;
  }
  getName(){
    return this.lister[this.setNumber(this.x)].name;
  }


}
