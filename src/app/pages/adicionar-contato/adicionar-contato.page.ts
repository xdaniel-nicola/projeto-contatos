import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonButton
  ,IonText
 } from '@ionic/angular/standalone';
import { FirebaseService, Contato } from 'src/app/services/firebase';

@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.page.html',
  styleUrls: ['./adicionar-contato.page.scss'],
  standalone: true,
  imports: [FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonButton
    ,IonText
  ]
})
export class AdicionarContatoPage implements OnInit {
  contato: Contato = { nome: '', email: '' };
  contatos: Contato[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.carregarContatos();
  }

  salvarContato() {
    this.firebaseService.addContato(this.contato).then(() => {
      alert('Contato adicionado com sucesso!');
      this.contato = { nome: '', email: '' };
    });
  }

  carregarContatos() {
    this.firebaseService.getContatos().subscribe((dados) => {
      this.contatos = dados;
    });
  }
}
