import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-card',
  standalone: false,
  templateUrl: './cadastro-card.component.html',
  styleUrl: './cadastro-card.component.css',
})
export class CadastroCardComponent {
  nome: string = '';
  idade: number | null = null;
  cor: string = '';

  cores = ['Preto', 'Branco', 'Marrom', 'Dourado', 'Cinza'];

  salvar() {
    console.log('Dados salvos:', {
      nome: this.nome,
      idade: this.idade,
      cor: this.cor,
    });
  }

  cancelar() {
    this.nome = '';
    this.idade = null;
    this.cor = '';
  }
}
