import { Component } from '@angular/core';
import { Store } from 'src/app/Models/store';
import { Iproduct } from 'src/app/Models/iproduct';
import { Client } from 'src/app/Models/client';
import Swal from 'sweetalert2'
import { ICategory } from 'src/app/Models/i-category';
import { ProductDetailsComponent } from '../pruductDetails/product-details/product-details.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
// ! DAY 1
// //* product 1
// product1Name:string="Laptop";
// product1Quantity:number=7;
// product1ID:number=1;
// product1Model:string="Lenovo";
// //* product 2
// product2Name:string="Laptop";
// product2Quantity:number=20;
// product2ID:number=2;
// product2Model:string="HP";

// //* method for price 
// product1Price:number=20000;
// Price():number{
//   return this.product1Price;
// }

//! DAY 2

//? Q1
st1:Store= new Store("store1",["qena","qena"],"img");

//? Q2

products:Iproduct[] ;
category:ICategory[];
flagImage:boolean=true;
isPurchased: boolean = false;
selectedCategory:number=0;
constructor(){
//* product
  this.products=[
    // ! MOBILE Category 1
    {id:1, name:"Iphone 14 pro max 128 gb", quantity: 1, price:45890,img:"https://m.media-amazon.com/images/I/61og24KT3EL._AC_SX679_.jpg",categoryID:1,color:"purple",discount:"no discount"},
    {id:14, name:"Iphone 13 128 gb", quantity: 2, price:45890,img:"https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_SX679_.jpg",categoryID:1,color:"white", discount:"5%"},
    {id:100, name:"Iphone 14 plus 128 gb", quantity: 1, price:39650,img:"https://m.media-amazon.com/images/I/61j9pkFIMJL._AC_SX679_.jpg",categoryID:1,color:"blue", discount:"5%"},
    //! lAPTOPBS Category 2
    {id:50, name:"16-inch MacBook Pro: Apple M1 Pro chip with 10-core CPU and 16-core GPU, 16GB, 512GB SSD - Silver", quantity: 0, price:88578,img:"https://m.media-amazon.com/images/I/61KbY1K4ZAL._AC_SX679_.jpg",categoryID:2,color:"Silver",discount:"no discount"},
    {id:51, name:"Apple 2023 MacBook Pro laptop with Apple M2 Pro chip with 10-core CPU and 16-core GPU: 14.2-inch Liquid Retina XDR display, 16GB, 512GB SSD storage. Works with iPhone/iPad; Space Grey; English", quantity: 1, price:90000,img:"https://m.media-amazon.com/images/I/61lYIKPieDL._AC_SX679_.jpg",categoryID:2,color:"Grey",discount:"no discount"},
    {id:40, name:"Apple 2023 MacBook Pro laptop with Apple M2 Pro chip with 10-core CPU and 16-core GPU: 14.2-inch Liquid Retina XDR display, 16GB, 512GB SSD storage. Works with iPhone/iPad; Space Grey; English", quantity: 3, price:90000,img:"https://m.media-amazon.com/images/I/61lYIKPieDL._AC_SX679_.jpg",categoryID:2,color:"Silver" ,discount:"no discount"},

    //! DAY3 3 
    

]

//* category 
  this.category=[{categoryID:1,categoryName:"Mobile"},
  {categoryID:2,categoryName:"Laptop"}]
}

clientData:Client={
  name:"jameela"
}


//! 2 C 3
show() {
  // Swal.fire(
  //   'Good job!',
  //   `Thanks ${this.clientData.name} for purchasing from our Store`,
  //   'success'
  // );
  

  //alert("message");
}

//! 3 C
buyProduct(index: number) {
  if (this.products[index].quantity > 0) {
    this.products[index].quantity--;
    this.isPurchased = true; 
    this.flagImage=false;
  }
}


//! Day3 1 
date1:Date=new Date();
}

