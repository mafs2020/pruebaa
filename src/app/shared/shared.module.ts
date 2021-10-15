import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// formularios Reactivos
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// angular material
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from '../components/card/card.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

const modulos = [MatCardModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatFormFieldModule, ReactiveFormsModule, FormsModule];

@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ...modulos,
  ],
  exports: [
    RouterModule,
    ...modulos,
    CardComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
