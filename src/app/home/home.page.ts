import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent
  ,IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent
  ,IonCardSubtitle, IonButtons
 } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackCircle, arrowForwardCircle } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent
    ,IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent
    ,IonCardSubtitle, RouterLink, IonButtons
  ],
})
export class HomePage {
  constructor() {
    addIcons({ arrowForwardCircle, arrowBackCircle });
  }

  
}

