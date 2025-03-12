import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCardComponent } from './cadastro-card/cadastro-card.component';

const routes: Routes = [
  { path: 'cadastrar', component: CadastroCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
