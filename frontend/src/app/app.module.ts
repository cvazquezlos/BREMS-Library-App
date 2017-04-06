import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { routing } from './app.routing';

import {AppComponent} from "./app.component";

import {FooterComponent} from "./component/footer/footer.component";
import {HeaderComponent} from "./component/header/header.component";

import {AboutComponent} from "./component/home/about.component";
import {ContactComponent} from "./component/home/contact.component";

import {HomeComponent} from "./component/home/home.component";
import {SearchComponent} from "./component/home/search/search.component";

import {ProfileComponent} from "./component/user/profile/profile.component";


@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
