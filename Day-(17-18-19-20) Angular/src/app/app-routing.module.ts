import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ProductsComponent } from './Components/products/products.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { GroupOfRouteComponentsComponent } from './Components/group-of-route-components/group-of-route-components.component';
import { ProductDetailsComponent } from './Components/pruductDetails/product-details/product-details.component';


const routes: Routes = [
  //* Method 1
  {path:"", component:HomePageComponent,title:"Home"},
  //* Method 2

  {
    path: 'Main',
    component: GroupOfRouteComponentsComponent,
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      { path: 'Home', component: HomePageComponent, title: 'Home' },
      { path: 'product', component: ProductsComponent, title: 'Product' },
      { path: 'About-Us', component: AboutUsComponent, title: 'About us' },
      {
        path: 'Contact-Us',
        component: ContactUsComponent,
        title: 'Contact us',
      },
      {path:"productDetails/:prodID",component:ProductDetailsComponent,title:"productDetails"}
    ],
  },

  { path: '**', component: NotfoundComponent, title: 'notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
