import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {routing} from './app.routing';
import {AppComponent} from './app.component';

import {HomeAdminComponent} from './component/admin/home-admin.component';

import {FooterComponent} from './component/footer/footer.component';
import {FooterAdminComponent} from './component/footer/footer-admin.component';
import {HeaderComponent} from './component/header/header.component';
import {HeaderAdminComponent} from './component/header/header-admin.component';

import {AboutComponent} from './component/home/about.component';
import {ContactComponent} from './component/home/contact.component';
import {HomeComponent} from './component/home/home.component';
import {SearchComponent} from './component/home/search/search.component';

import {LoginComponent} from './component/login/login.component';
import {RegisterComponent} from './component/login/register.component';

import {ProfileComponent} from './component/user/profile/profile.component';

import {ResourceService} from './service/resource.service';
import {UserService} from './service/user.service';
import {SessionService} from './service/session.service';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    FooterComponent,
    FooterAdminComponent,
    HeaderComponent,
    HeaderAdminComponent,
    HomeComponent,
    HomeAdminComponent,
    ProfileComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
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
