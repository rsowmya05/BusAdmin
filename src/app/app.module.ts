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

var myRoutes:Routes=[
  {path:'add',component:AddbusComponent},
  {path:'update',component:UpdatebusComponent},
  {path:'updateroute',component:UpdaterouteComponent},
  {path:'view',component:ViewbusComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddbusComponent,
    UpdatebusComponent,
    UpdaterouteComponent,
    ViewbusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    // HttpClientModule,   
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
