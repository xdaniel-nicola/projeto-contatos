import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, 
  IonItem, IonLabel, IonList, IonButton, IonText
  ,IonInput, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { FirebaseService, Contato } from 'src/app/services/firebase';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';
import { arrowBackCircle, arrowForwardCircle } from 'ionicons/icons';

@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.page.html',
  styleUrls: ['./adicionar-contato.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonList,
    IonButton,
    IonText,
    IonInput,
    IonButtons,
    RouterLink,
    IonIcon
  ]
})
export class AdicionarContatoPage implements OnInit {
  contato: Contato = { nome: '', email: '' };
  contatos: Contato[] = [];

  constructor(private firebaseService: FirebaseService) {
    addIcons({ arrowForwardCircle, arrowBackCircle });
  }

  ngOnInit() {
    this.carregarContatos();
  }

  // Salva o contato e atualiza a lista imediatamente
  salvarContato() {
    if (!this.contato.nome || !this.contato.email) {
      alert('Preencha nome e email antes de salvar!');
      return;
    }

    this.firebaseService.addContato(this.contato).then(() => {
      alert('Contato adicionado com sucesso!');
      this.contato = { nome: '', email: '' };
      this.carregarContatos(); // Atualiza a lista após salvar
    }).catch(err => {
      console.error('Erro ao adicionar contato:', err);
      alert('Erro ao adicionar contato. Veja o console.');
    });
  }

  // Carrega todos os contatos do Firebase Realtime Database
  carregarContatos() {
    this.firebaseService.getContatos().subscribe({
      next: (dados) => this.contatos = dados,
      error: (err) => console.error('Erro ao carregar contatos:', err)
    });
  }

  // TrackBy para ngFor (melhora performance)
  trackById(index: number, item: Contato) {
    return item.id;
  }

  async excluirContato(id:string) {
    await this.firebaseService.excluirContato(id);
  }
}
