import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbusComponent } from './addbus/addbus.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { UpdaterouteComponent } from './updateroute/updateroute.component';
import { ViewbusComponent } from './viewbus/viewbus.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchbusComponent } from './searchbus/searchbus.component';
import { DisplaybusComponent } from './displaybus/displaybus.component';

var myRoutes:Routes=[
  {path:'add',component:AddbusComponent},
  {path:'update',component:UpdatebusComponent},
  {path:'updateroute',component:UpdaterouteComponent},
  {path:'view',component:ViewbusComponent},
  {path:'search',component:SearchbusComponent},
  {path:'viewbus',component:DisplaybusComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddbusComponent,
    UpdatebusComponent,
    UpdaterouteComponent,
    ViewbusComponent,
    SearchbusComponent,
    DisplaybusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    // HttpClientModule,   
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
