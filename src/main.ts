import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp } from '@angular/fire/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { routes } from './app/app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyAmnDtpXCvllIg6BrYuv93CHxGV-Uqwi2w",
  authDomain: "projeto-contatos-45d22.firebaseapp.com",
  databaseURL: "https://projeto-contatos-45d22-default-rtdb.firebaseio.com",
  projectId: "projeto-contatos-45d22",
  storageBucket: "projeto-contatos-45d22.appspot.com",
  messagingSenderId: "167537490789",
  appId: "1:167537490789:web:548111ace654684d057f8c"
};

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideDatabase(() => getDatabase()), // ✅ Realtime Database
  ],
});
