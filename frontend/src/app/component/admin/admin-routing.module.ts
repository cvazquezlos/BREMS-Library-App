import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ManageResourcesComponent } from './manage-resources/manage-resources.component';
import { EditResourceComponent } from './manage-resources/edit/edit.component';
import { CreateResourceComponent } from './manage-resources/create/create.component';

import { ManageLoansComponent } from './manage-loans/manage-loans.component';
import { CreateLoanComponent } from './manage-loans/create/create.component';

import { ManageFinesComponent } from './manage-fines/manage-fines.component';

import { CreateUserComponent } from './manage-users/create/create.component';
import { EditUserComponent } from './manage-users/edit/edit.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';


const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'resources', component: ManageResourcesComponent },
          { path: 'resources/new', component: CreateResourceComponent },
          { path: 'resources/:id', component: EditResourceComponent },
          { path: 'loans', component: ManageLoansComponent },
          { path: 'loans/new', component: CreateLoanComponent },
          { path: 'fines', component: ManageFinesComponent },
          { path: 'users', component: ManageUsersComponent },
          { path: 'users/new', component: CreateUserComponent },
          { path: 'users/:id', component: EditUserComponent },
          { path: '', component: DashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
