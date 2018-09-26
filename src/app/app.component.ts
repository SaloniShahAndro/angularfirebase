import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  template: `
  <h1>List of Data</h1>
  <ul id="list">
    <li *ngFor="let item of items | async" [ngClass]="{'active': selectedItem == item}" (click)="listClick($event, item)" >
      {{ item.name }}
    </li>

  </ul>
  <input type="text" id="message" placeholder="Type here..."
  (keyup.enter)="chatSend($event.target.value)" [(ngModel)]="selectedItem" />
<br/>
  
  `
})
export class AppComponent {
  items: Observable<any[]>;
  itemRef;
  itemRef1;
  selectedItem;
  newValue;
  usr: Observable<any>;




  constructor(public db: AngularFirestore, public af: AngularFireDatabase) {
    //this.items = db.collection('users').valueChanges();
    for (var i = 0; i < 15; i++) {
      this.itemRef = this.af.object('items/' + i);
      this.itemRef.set({ name: 'testing' + i, email: `testing${i}@gmail.com` });
    }
    this.itemRef.set({ name: 'saloni' })
    this.items = af.list('items').valueChanges();

  }

  chatSend(message: string) {
    /*  new node for users */
    this.itemRef1 = this.af.object('users');
    this.itemRef1.set({ name: message });
    // this.itemRef.update({name: message},this.selectedItem)
    
    var category=this.af.list('/items', ref => 
    ref.orderByChild('name').equalTo(this.selectedItem))
    .valueChanges()
    .subscribe(categoryItems => {
      console.log(">>>selectedItem>>>",categoryItems);
//return categoryItems

      this.af.object(`items/2`).update({ name: message })

    });
   
    console.log(">>>category>>>",category);

    //this.af.list.push({'name':'user2'})
  }

  listClick(event, newValue) {
    this.selectedItem = newValue.name;  // don't forget to update the model here
    this.newValue = newValue;
    //var newPostKey = firebase.database().ref().child('items').push().key;

 
  }

}