export interface Pizza {
    name: string;
    price: number;
    desciption: string;
    toppings: string [];
    sauce: string;
    cheese: string;
    crust: string;
    img: string;
    fanFav: boolean;
  }

  export class CustomPizza {
    toppings: string[] = [];
    sauce: string = "";
    cheese: string = "";
    crust: string = "";
    constructor(){}
  }