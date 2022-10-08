import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddonarComponent } from './adddonar/adddonar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { DeledonarComponent } from './deledonar/deledonar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdddonarComponent,
    NavbarComponent,
    SearchComponent,
    DeledonarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
