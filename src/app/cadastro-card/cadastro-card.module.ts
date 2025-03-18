import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroCardComponent } from './cadastro-card.component';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [CadastroCardComponent]
})
export class CadastroCardModule { }
