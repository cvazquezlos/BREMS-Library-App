import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AboutComponent } from './about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { MainComponent } from './main.component';
import { ProfileComponent } from './profile.component';
import { SearchComponent } from './search.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
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
