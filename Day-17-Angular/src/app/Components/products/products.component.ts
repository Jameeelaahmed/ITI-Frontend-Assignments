import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
//* product 1
product1Name:string="Laptop";
product1Quantity:number=7;
product1ID:number=1;
product1Model:string="Lenovo";
//* product 2
product2Name:string="Laptop";
product2Quantity:number=20;
product2ID:number=2;
product2Model:string="HP";

//* method for price 
product1Price:number=20000;
Price():number{
  return this.product1Price;
}
}
