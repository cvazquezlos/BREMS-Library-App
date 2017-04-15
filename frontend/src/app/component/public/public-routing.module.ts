import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PublicComponent} from './public.component';

import {AboutComponent} from './home/about.component';
import {ContactComponent} from './home/contact.component';
import {HomeComponent} from './home/home.component';
import {ResourceDetailsComponent} from './home/resource-details.component';
import {SearchComponent} from './home/search/search.component';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register.component';

import {ProfileComponent} from './user/profile.component';

const publicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        children: [
          {path: '', component: HomeComponent},
          {path: 'about', component: AboutComponent},
          {path: 'contact', component: ContactComponent},
          {path: 'login', component: LoginComponent},
          {path: 'profile', component: ProfileComponent},
          {path: 'register', component: RegisterComponent},
          {path: 'resource/:id', component: ResourceDetailsComponent },
          {path: 'search', component: SearchComponent}
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
export class PublicRoutingModule {
}
