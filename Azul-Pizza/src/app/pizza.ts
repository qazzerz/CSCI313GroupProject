export interface Pizza {
    name: string;
    toppings: string [];
    sauce: string;
    cheese: string;
    crust: string;
    img: string;
  }

  export class CustomPizza {
    toppings: string[] = [];
    sauce: string = "";
    cheese: string = "";
    crust: string = "";
    constructor(){}
  }