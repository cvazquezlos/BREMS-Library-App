import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/home/about.component';
import { ContactComponent } from './component/home/contact.component';
import { SearchComponent } from './component/home/search/search.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/login/register.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin', loadChildren: './component/admin/admin.module#AdminModule' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
