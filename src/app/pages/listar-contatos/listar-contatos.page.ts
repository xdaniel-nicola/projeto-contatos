import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { IonContent, IonHeader, IonTitle, IonToolbar
  ,IonList
  ,IonItem
  ,IonLabel
  ,IonText
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.page.html',
  styleUrls: ['./listar-contatos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule
    ,IonList
    ,IonItem
    ,IonLabel
    ,IonText
  ]
})
export class ListarContatosPage implements OnInit {

  usuarios: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe({
      next: (dados) => (this.usuarios = dados),
      error: (err) => console.error('Erro ao carregar usuários', err),
    });
  }

}
