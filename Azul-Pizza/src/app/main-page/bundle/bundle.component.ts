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
  tempPizzaDoubleList: Pizza[] = [{id: 0, name:'',toppings: [], cheese :'',sauce: ''
   ,crust:'', img: '', price: 0, desciption:'',fanFav : false}];
  tempPizza2: Pizza = {id: 0, name:'',toppings: [], cheese :'',sauce: ''
   ,crust:'', img: '', price: 0, desciption:'',fanFav : false};
  @Input() otherMenu: any[] = OTHERMENU;
  @Input() tempPizzaPrice: number = 0;
  @Input() tempPizzaList: Pizza[] = PREMADES;
  
  updatedDoublePriceId: number = 0;
  pricedOut: number = 0;
  pricedOutDouble: number = 0;
  tempPizzaId: number = 0;
  tempPizzaDouble1Id: number = 0;
  tempPizzaDouble2Id: number = 0;
  doublePopChoice: string = "";
  updatedSinglePriceId: number = 0;
    constructor(private shopSer: ShoppingCartService) { }
  
    ngOnInit(): void {
      this.pricedOut = +this.tempPizzaList[0].price + +this.otherMenu[0].price;
      this.tempPizza = this.tempPizzaList[0];
      this.tempPizzaDoubleList[0] = this.tempPizzaList[0]
      this.tempPizzaDoubleList[1] = this.tempPizzaList[0]
      this.pricedOutDouble = this.tempPizzaDoubleList[0].price + this.tempPizzaDoubleList[1].price;
    }
    ngOnChanges(){
      
    }
    updatePizzaDouble(){
      this.tempPizzaDoubleList[0] = this.tempPizzaList[this.tempPizzaDouble1Id];
      this.tempPizzaDoubleList[1] = this.tempPizzaList[this.tempPizzaDouble2Id];
      this.doublePopChoice = this.otherMenu[this.updatedDoublePriceId].name;
      if(this.tempPizzaDoubleList.length = 2){
        this.pricedOutDouble = +this.otherMenu[this.updatedDoublePriceId].price + +this.tempPizzaDoubleList[0].price + +this.tempPizzaDoubleList[1].price - 2;
      }
      else{
      this.pricedOutDouble = +this.otherMenu[this.updatedDoublePriceId].price + +this.tempPizzaDoubleList[0].price + +this.tempPizzaDoubleList[1].price;
      }
    }

    updateDoublePrice(){
      this.pricedOut = +this.otherMenu[this.updatedDoublePriceId].price + +this.tempPizza.price;
    }
    updatePizza(){
      this.tempPizza = this.tempPizzaList[this.tempPizzaId];
      this.pricedOut = +this.otherMenu[this.tempPizzaId].price + +this.tempPizza.price;
    }
    updatePrice(){
      this.pricedOut = +this.otherMenu[this.updatedSinglePriceId].price + +this.tempPizza.price;
    }
    addPizzaPop(){
      var desciption: string = this.tempPizza.name + ", " + this.otherMenu[this.tempPizzaId].name;
      this.shopSer.addItem({desciption: desciption , price: this.pricedOut, name: "Pizza Pop Bundle: "});
    }
    addDoublePizza(){
      var desciption: string = this.tempPizzaDoubleList[0].name + ", " + this.tempPizzaDoubleList[1].name + ", " + this.otherMenu[this.updatedDoublePriceId].name;
      this.shopSer.addItem({desciption: desciption , price: this.pricedOutDouble, name: "2 Pizza Bundle: "});
    }
  }
