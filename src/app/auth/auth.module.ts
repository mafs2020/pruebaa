import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { EntrarComponent } from './entrar/entrar.component';


import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthComponent,
    EntrarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }