import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from'../../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.css'],
  providers: [ShoppingCartService]
})
export class ShoppingCartCardComponent implements OnInit {
  cartlist: any[]= [];

  constructor(private cartListService:ShoppingCartService) { }

  ngOnInit(): void {
    this.cartlist=this.cartListService.getCartList();
  }


}
