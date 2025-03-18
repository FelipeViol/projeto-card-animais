import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';  // Importe as classes necessárias

@Component({
  selector: 'app-cadastro-card',
  standalone: false,
  templateUrl: './cadastro-card.component.html',
  styleUrl: './cadastro-card.component.css',
})
export class CadastroCardComponent {
  cadastroForm: FormGroup;  // Definindo o formulário reativo

  cores = ['Preto', 'Branco', 'Marrom', 'Dourado', 'Cinza'];

  // Lista para armazenar os animais cadastrados
  animais: { nome: string; idade: number | null; cor: string }[] = [];

  constructor() {
    // Inicializando o formulário reativo
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),  // Validação: campo obrigatório
      idade: new FormControl(null, [Validators.required, Validators.min(1)]),  // Validação: campo obrigatório e idade mínima de 1
      cor: new FormControl('', [Validators.required]),  // Validação: campo obrigatório
    });
  }

  salvar() {
    if (this.cadastroForm.valid) {
      // Adiciona o novo animal à lista
      this.animais.push(this.cadastroForm.value);

      // Limpa os campos após salvar
      this.cancelar();
    } else {
      console.log('Formulário inválido');
    }
  }

  cancelar() {
    // Limpa os campos após salvar
    this.cadastroForm.reset();
  }
}
