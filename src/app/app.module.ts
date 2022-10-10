import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddonarComponent } from './adddonar/adddonar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './searchdonar/search.component';
import { DeledonarComponent } from './deledonar/deledonar.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllDonarComponent } from './view-all-donar/view-all-donar.component';

const appRoutes:Routes=[
  {
    path:"",component:AdddonarComponent
  },
  {
    path:"search",component:SearchComponent
  },
  {
  path:"delete",component:DeledonarComponent
  },
  {
    path:"view",component:ViewAllDonarComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdddonarComponent,
    NavbarComponent,
    SearchComponent,
    DeledonarComponent,
    ViewAllDonarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
