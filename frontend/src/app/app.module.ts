import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule } from "ngx-dropdown";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ActionService } from './service/action.service';
import { FineService } from './service/fine.service';
import { GenreService } from './service/genre.service';
import { UserService } from './service/user.service';
import { ResourceService } from './service/resource.service';
import { SessionService } from './service/session.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DropdownModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ActionService,
    FineService,
    GenreService,
    UserService,
    ResourceService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
