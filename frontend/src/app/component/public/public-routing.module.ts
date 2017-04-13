import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about.component';
import { ContactComponent } from './home/contact.component';
import { ProfileComponent } from './user/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

const publicRoutes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            {
                path: '',
                children: [
                    { path: '', component: HomeComponent },
                    { path: 'profile', component: ProfileComponent },
                    { path: 'login', component: LoginComponent },
                    { path: 'register', component: RegisterComponent },
                    { path: 'about', component: AboutComponent },
                    { path: 'contact', component: ContactComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(publicRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PublicRoutingModule { }
