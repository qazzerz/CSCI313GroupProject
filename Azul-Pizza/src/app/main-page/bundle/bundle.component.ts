import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { PREMADES } from 'src/app/premadePizzaList';
import { Pizza } from 'src/app/pizza';
import { OTHERMENU } from 'src/app/OtherMenuItems';
import { from } from 'rxjs';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css']
})
export class BundleComponent implements OnInit {
  @Input() tempPizza: Pizza = {
    name: '', toppings: [], cheese: '', sauce: ''
    , crust: '', img: '', price: 0, desciption: '', fanFav: false
  };
  @Input() otherMenu: any[] = OTHERMENU;
  @Input() tempPizzaPrice: number = 0;

  updatedPriceValue: number = 0;
  updatedPriceValue1: number = 0;

  constructor(private shopSer: ShoppingCartService) { }

  ngOnInit(): void {
  }

  updatePrice() {
    let x: number = this.tempPizzaPrice, y = this.tempPizza.price
    if (x < y) {
      this.updatedPriceValue1 = this.updatedPriceValue;
      this.tempPizza.price = +this.updatedPriceValue + +this.tempPizza.price;
    }
  }
  addPizza(tempBundle: any = { name: this.tempPizza.name, price: this.tempPizza.price }) {
    var price: number = tempBundle.price;
    var tempName: string = tempBundle.name;
    this.shopSer.addItem({ price, tempName });
  }
}
