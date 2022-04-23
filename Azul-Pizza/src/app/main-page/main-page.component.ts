import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  displayMain: boolean = true;
  displayDeal: boolean = false;
  displayPizzaBuilder: boolean = false;
  displayCart: boolean = false;

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


}
