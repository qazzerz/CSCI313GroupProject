import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { PREMADES } from 'src/app/premadePizzaList';
import { Pizza } from 'src/app/pizza';
import { OTHERMENU } from 'src/app/OtherMenuItems';
import { from } from 'rxjs';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css']
})
export class BundleComponent implements OnInit {
  tempPizza: Pizza = {id: 0, name:'',toppings: [], cheese :'',sauce: ''
   ,crust:'', img: '', price: 0, desciption:'',fanFav : false};
  tempPizza2: Pizza = {id: 0, name:'',toppings: [], cheese :'',sauce: ''
   ,crust:'', img: '', price: 0, desciption:'',fanFav : false};
  @Input() otherMenu: any[] = OTHERMENU;
  @Input() tempPizzaPrice: number = 0;
  @Input() tempPizzaList: Pizza[] = PREMADES;
  
  updatedPriceValue: number = 0;
  pricedOut: number = 0;
  tempPizzaId: number = 0;

    constructor(private shopSer: ShoppingCartService) { }
  
    ngOnInit(): void {
      this.pricedOut = this.tempPizzaList[0].price;
      this.tempPizza = this.tempPizzaList[0];
    }
    ngOnChanges(){
      this.tempPizza;
    }
    updatePizza(){
      this.tempPizza = this.tempPizzaList[this.tempPizzaId];
      this.pricedOut = +this.updatedPriceValue + +this.tempPizza.price;
    }
    updatePrice(){
      this.pricedOut = +this.updatedPriceValue + +this.tempPizza.price;
    }
    addPizza(tempBundle: any = {name: this.tempPizza.name, price: this.tempPizza.price }){
      var price: number = +this.updatedPriceValue + +this.tempPizza.price;
      var tempName: string = tempBundle.name;
      console.log(price);
      this.shopSer.addItem({price , tempName});
    }
  }
