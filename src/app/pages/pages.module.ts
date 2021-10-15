import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboradComponent } from './dashborad/dashborad.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent,
    DashboradComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    // RouterModule
  ]
})
export class PagesModule { }
