import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Books } from './books.model';
import {FormControl ,FormGroup} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  formData : Books;

  constructor(public firestore:AngularFirestore) { }

  getBooks(){
    return this.firestore.collection("Books").snapshotChanges();
  }
}
