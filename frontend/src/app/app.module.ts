import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';

import { AboutComponent } from './component/home/about.component';
import { ContactComponent } from './component/home/contact.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/home/search/search.component';

import { LoginComponent } from './component/login/login.component';
import { ModalLogin } from './component/login/modal.component/modal-login';
import { RegisterComponent } from './component/login/register.component';

import { ProfileComponent } from './component/user/profile/profile.component';

import { ResourceService } from './service/resource.service';
import { UserService } from './service/user.service';
import { SessionService } from './service/session.service';


@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    ModalLogin
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    ResourceService,
    UserService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
