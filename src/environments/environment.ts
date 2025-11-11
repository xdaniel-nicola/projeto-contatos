// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  production: false,
  apiKey: "AIzaSyAmnDtpXCvllIg6BrYuv93CHxGV-Uqwi2w",
  authDomain: "projeto-contatos-45d22.firebaseapp.com",
  databaseURL: "https://projeto-contatos-45d22-default-rtdb.firebaseio.com",
  projectId: "projeto-contatos-45d22",
  storageBucket: "projeto-contatos-45d22.firebasestorage.app",
  messagingSenderId: "167537490789",
  appId: "1:167537490789:web:548111ace654684d057f8c",
  measurementId: "G-NYMHVM3JZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
