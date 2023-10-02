import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadImageComponent } from './load-image/load-image.component';
import { ViewImageComponent } from './view-image/view-image.component';
import { LoginnComponent } from './loginn/loginn.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SearchClientsComponent } from './search-clients/search-clients.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { MyAshComponent } from './my-ash/my-ash.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    LoadImageComponent,
    ViewImageComponent,
    LoginnComponent,
    RegisterComponent,
    HomeComponent,
    SearchClientsComponent,
    ImageListComponent,
    ProfilePictureComponent,
    MyAshComponent,
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
