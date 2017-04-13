import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/home/about.component';
import { ContactComponent } from './component/home/contact.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/home/search/search.component';
import { LoginComponent } from './component/login/login.component';
import { ModalLogin } from "./component/login/modal.component/modal-login";
import { RegisterComponent } from './component/login/register.component';
import { ProfileComponent } from './component/user/profile.component';

import { ActionService } from './service/action.service';
import { FineService } from './service/fine.service';
import { GenreService } from './service/genre.service';
import { UserService } from './service/user.service';
import { ResourceService } from './service/resource.service';
import { SessionService } from './service/session.service';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ModalLogin,
    ProfileComponent,
    RegisterComponent,
    SearchComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ActionService,
    FineService,
    GenreService,
    UserService,
    ResourceService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
