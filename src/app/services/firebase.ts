import { Injectable } from '@angular/core';
import { getDatabase, ref, push, set, onValue, remove } from 'firebase/database';
import { Observable } from 'rxjs';
import { firebaseConfig } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';

export interface Contato {
  id?: string;
  nome: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  // constructor(private db: Database) {}
  private db = getDatabase(initializeApp(firebaseConfig));

  addContato(contato: Contato): Promise<void> {
    const contatosRef = ref(this.db, 'contatos');
    const novoContatoRef = push(contatosRef);
    return set(novoContatoRef, contato);
  }

  getContatos(): Observable<Contato[]> {
    return new Observable((observer) => {
      const contatosRef = ref(this.db, 'contatos');
      onValue(contatosRef, (snapshot) => {
        const data = snapshot.val();
        const lista = data? Object.keys(data).map((id) => ({ id, ...data[id] }))
        : [];
        observer.next(lista);
      }, (error) => observer.error(error));
    });
  }

  excluirContato(id:string) {
    const db = getDatabase();
    const contatoRef = ref(db, 'contatos/'+id);

    remove(contatoRef)
      .then(() => console.log('Contato excluído com sucesso!'))
      .catch((error) => console.error('Erro ao excluir contato:', error))
  }






//   // Adiciona um contato
//   addContato(contato: Contato) {
//     const contatosRef = ref(this.db, 'contatos');
//     const novoContatoRef = push(contatosRef);
//     return set(novoContatoRef, contato);
//   }

//   // Lista contatos como Observable
//   getContatos(): Observable<Contato[]> {
//     return new Observable((observer) => {
//       const contatosRef = ref(this.db, 'contatos');
//       onValue(contatosRef, (snapshot) => {
//         const data = snapshot.val();
//         const contatos: Contato[] = [];
//         for (let key in data) {
//           contatos.push({ id: key, ...data[key] });
//         }
//         observer.next(contatos);
//       });
//     });
//   }
}
