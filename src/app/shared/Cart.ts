import { CartItem } from "./models/CartItem";

export class Cart {
  
    items:CartItem[] = [];

    get totalPice(): number {
        let totalPice = 0;
        this.items.forEach(item => totalPice += item.price);
        return totalPice;
    } 
}