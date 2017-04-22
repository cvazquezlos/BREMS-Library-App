import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ManageResourcesComponent } from './manage-resources/manage-resources.component';
import { EditResourceComponent } from './manage-resources/edit/edit.component';
import { CreateResourceComponent } from './manage-resources/create/create.component';

import { EditUserComponent } from './manage-users/edit/edit.component';
import { ManageLoansComponent } from './manage-loans/manage-loans.component';
import { CreateLoanComponent } from './manage-loans/create/create.component';
import { ManageFinesComponent } from './manage-fines/manage-fines.component';
import { CreateUserComponent } from './manage-users/create/create.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
        CreateLoanComponent,
        ManageFinesComponent,
        ManageUsersComponent,
        CreateUserComponent,
        EditUserComponent,
        CreateResourceComponent,

    ]
})
export class AdminModule {
}
