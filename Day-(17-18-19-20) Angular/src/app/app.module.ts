import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ProductsComponent } from './Components/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ImgStyleDirective } from './Directives/img-style.directive';
import { VisaFormatPipe } from './pipes/visa-format.pipe';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { GroupOfRouteComponentsComponent } from './Components/group-of-route-components/group-of-route-components.component';
import { ProductDetailsComponent } from './Components/pruductDetails/product-details/product-details.component';
import { ParentProductComponent } from './Components/parent-product/parent-product.component';
import { HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './Components/posts/posts.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ProductsComponent,
    FooterComponent,
    ImgStyleDirective,
    VisaFormatPipe,
    AboutUsComponent,
    HomePageComponent,
    ContactUsComponent,
    NotfoundComponent,
    GroupOfRouteComponentsComponent,
    ProductDetailsComponent,
    ParentProductComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
