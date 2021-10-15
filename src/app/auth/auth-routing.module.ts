import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [
  { 
    path: '',
    component: AuthComponent,
    children: [
      { path: '', component: EntrarComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
