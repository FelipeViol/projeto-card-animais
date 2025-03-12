import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroCardComponent } from './cadastro-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [CadastroCardComponent]
})
export class CadastroCardModule { }
