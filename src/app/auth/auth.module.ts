import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { EntrarComponent } from './entrar/entrar.component';


import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AuthComponent,
    EntrarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class AuthModule { }
