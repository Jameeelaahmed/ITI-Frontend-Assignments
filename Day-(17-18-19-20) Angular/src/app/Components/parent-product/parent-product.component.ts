import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/i-category';

@Component({
  selector: 'app-parent-product',
  templateUrl: './parent-product.component.html',
  styleUrls: ['./parent-product.component.css']
})
export class ParentProductComponent {

  category:ICategory[];
  selectedCategory:number=0;
  constructor(){
//* category 
this.category=[{categoryID:1,categoryName:"Mobile"},
{categoryID:2,categoryName:"Laptop"}]
}

}

