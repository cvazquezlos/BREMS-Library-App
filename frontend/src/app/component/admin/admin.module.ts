import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {AdminComponent} from './admin.component';

import {AdminRoutingModule} from './admin-routing.module';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ManageResourcesComponent} from './manage-resources/manage-resources.component';
import {EditResourceComponent} from './manage-resources/edit/edit.component';
import {EditUserComponent} from './manage-users/edit/edit.component';
import {ManageLoansComponent} from './manage-loans/manage-loans.component';
import {ManageFinesComponent} from './manage-fines/manage-fines.component';
import {CreateUserComponent} from './manage-users/create/create.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
     imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AdminComponent,
        HeaderComponent,
        SidebarComponent,
        DashboardComponent,
        ManageResourcesComponent,
        EditResourceComponent,
        ManageLoansComponent,
        ManageFinesComponent,
        ManageUsersComponent,
        CreateUserComponent,
        EditUserComponent,
        
    ]
})
export class AdminModule {
}
