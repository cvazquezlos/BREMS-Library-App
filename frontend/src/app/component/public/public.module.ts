import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PublicComponent } from './public.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './home/about.component';
import { ContactComponent } from './home/contact.component';
import { SearchComponent } from './home/search/search.component';
import { LoginComponent } from './login/login.component';
import { ModalLogin } from "./login/modal.component/modal-login";
import { RegisterComponent } from './login/register.component';
import { ProfileComponent } from './user/profile.component';

import { PublicRoutingModule } from './public-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PublicRoutingModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        PublicComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        SearchComponent,
        LoginComponent,
        ModalLogin,
        ProfileComponent,
        RegisterComponent
    ]
})
export class PublicModule { }
