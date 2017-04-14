import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManageResourcesComponent } from './manage-resources/manage-resources.component';
import { EditResourceComponent } from './manage-resources/edit/edit.component';
import { ManageLoansComponent } from './manage-loans/manage-loans.component';
import { ManageFinesComponent } from './manage-fines/manage-fines.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'resources', component: ManageResourcesComponent },
                    { path: 'resource/:id', component: EditResourceComponent },
                    { path: 'loans', component: ManageLoansComponent },
                    { path: 'fines', component: ManageFinesComponent },
                    { path: 'users', component: ManageUsersComponent },
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
export class AdminRoutingModule { }
