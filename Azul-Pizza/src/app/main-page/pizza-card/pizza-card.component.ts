import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { PREMADES } from 'src/app/premadePizzaList';
import { Pizza } from 'src/app/pizza';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css']
})
export class PizzaCardComponent implements OnInit {
@Input() name: string = "";
@Input() price: number = 0;
@Input() description = "";

  constructor(private shopSer: ShoppingCartService) { }

  ngOnInit(): void {
  }
  
}
