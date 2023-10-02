import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoadImageComponent } from './load-image/load-image.component';
import { ViewImageComponent } from './view-image/view-image.component';
import { LoginnComponent } from './loginn/loginn.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SearchClientsComponent } from './search-clients/search-clients.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { MyAshComponent } from './my-ash/my-ash.component';









const routes: Routes = [
  {path:"products" ,component: ProductsComponent  },
  {path: "loadImage" , component:  LoadImageComponent },
  {path: "viewImage" , component:  ViewImageComponent },
  {path: "login" , component:  LoginnComponent },
  {path: "register" , component:  RegisterComponent },
  {path: "home" , component:  HomeComponent },
  {path: "searchClient" , component:  SearchClientsComponent },
  {path: "imageList" , component:  ImageListComponent },
  {path: "profilePicture" , component:  ProfilePictureComponent },
  {path: "ash" , component:  MyAshComponent}









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
