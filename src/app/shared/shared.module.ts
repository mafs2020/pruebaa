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

const modulos = [MatCardModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatFormFieldModule, ReactiveFormsModule, FormsModule];

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ...modulos
  ],
  exports: [
    ...modulos,
    CardComponent
  ]
})
export class SharedModule { }
