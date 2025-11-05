import { Injectable } from '@angular/core';
import { Database, ref, push, set, onValue } from '@angular/fire/database';
import { Observable } from 'rxjs';

export interface Contato {
  id?: string;
  nome: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private db: Database) {}

  // Adiciona um contato
  addContato(contato: Contato) {
    const contatosRef = ref(this.db, 'contatos');
    const novoContatoRef = push(contatosRef);
    return set(novoContatoRef, contato);
  }

  // Lista contatos como Observable
  getContatos(): Observable<Contato[]> {
    return new Observable((observer) => {
      const contatosRef = ref(this.db, 'contatos');
      onValue(contatosRef, (snapshot) => {
        const data = snapshot.val();
        const contatos: Contato[] = [];
        for (let key in data) {
          contatos.push({ id: key, ...data[key] });
        }
        observer.next(contatos);
      });
    });
  }
}
