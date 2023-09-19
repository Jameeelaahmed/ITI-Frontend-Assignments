import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //* STEP 1
  products:Iproduct[] ;
  constructor() {
    //* STEP 2
    this.products=[
      // ! MOBILE Category 1
      {id:1, name:"Iphone 14 pro max 128 gb", quantity: 1, price:45890,img:"https://m.media-amazon.com/images/I/61og24KT3EL._AC_SX679_.jpg",categoryID:1,color:"purple",discount:"no discount"},
      {id:14, name:"Iphone 13 128 gb", quantity: 2, price:45890,img:"https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_SX679_.jpg",categoryID:1,color:"white", discount:"5%"},
      {id:100, name:"Iphone 14 plus 128 gb", quantity: 1, price:39650,img:"https://m.media-amazon.com/images/I/61j9pkFIMJL._AC_SX679_.jpg",categoryID:1,color:"blue", discount:"5%"},
      //! lAPTOPBS Category 2
      {id:50, name:"16-inch MacBook Pro: Apple M1 Pro chip with 10-core CPU and 16-core GPU, 16GB, 512GB SSD - Silver", quantity: 0, price:88578,img:"https://m.media-amazon.com/images/I/61KbY1K4ZAL._AC_SX679_.jpg",categoryID:2,color:"Silver",discount:"no discount"},
      {id:51, name:"Apple 2023 MacBook Pro laptop with Apple M2 Pro chip with 10-core CPU and 16-core GPU: 14.2-inch Liquid Retina XDR display, 16GB, 512GB SSD storage. Works with iPhone/iPad; Space Grey; English", quantity: 1, price:90000,img:"https://m.media-amazon.com/images/I/61lYIKPieDL._AC_SX679_.jpg",categoryID:2,color:"Grey",discount:"no discount"},
      {id:40, name:"Apple 2023 MacBook Pro laptop with Apple M2 Pro chip with 10-core CPU and 16-core GPU: 14.2-inch Liquid Retina XDR display, 16GB, 512GB SSD storage. Works with iPhone/iPad; Space Grey; English", quantity: 3, price:90000,img:"https://m.media-amazon.com/images/I/61lYIKPieDL._AC_SX679_.jpg",categoryID:2,color:"Silver" ,discount:"no discount"},
    ];
  }
  //* STEP 3
  getAllProducts():Iproduct[]{
    return this.products;
  }
  //*STEP 4
  getProductsByCatID(catID: number): Iproduct[] {
    if (catID == 0) {
      return this.getAllProducts();
    } else {
      return this.products.filter(prd => prd.categoryID == catID);
    }
  }
  
  //! DAY 4 Q3
  
  getProductByID(prdID:number):Iproduct|undefined{
    return this.products.find(prd=>prd.id==prdID)
  }
}
