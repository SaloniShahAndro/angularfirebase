import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBCqEym3XO6OCJoXqtTC1wex10o7CszUFw",
    authDomain: "fcc-book-trading-c18ee.firebaseapp.com",
    databaseURL: "https://fcc-book-trading-c18ee.firebaseio.com",
    projectId: "fcc-book-trading-c18ee",
    storageBucket: "fcc-book-trading-c18ee.appspot.com",
    messagingSenderId: "102914441837"
};


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule ,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
