import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currentProductID:number=0;
  product:Iproduct|undefined=undefined;
  constructor(public prdService:ProductsService,public activatedRoute:ActivatedRoute){
  
  }
  ngOnInit(): void {
    this.currentProductID = this.activatedRoute.snapshot.paramMap.get('prodID')
      ? Number(this.activatedRoute.snapshot.paramMap.get('prodID')) : 0;
    console.log('Current Product ID:', this.currentProductID);
  
    this.product = this.prdService.getProductByID(this.currentProductID);
    console.log('Product:', this.product);
  }
  
  
}
