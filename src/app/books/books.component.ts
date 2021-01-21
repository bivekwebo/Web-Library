import { Books } from './../services/books.model';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { BooksService } from '../services/books.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(public service : BooksService,public firestore:AngularFirestore,public toastr:ToastrService) { }

  ngOnInit(){
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      id:null , 
      name:"",
      author:'',
      price:'',

    }
  }
  onSubmit(form:NgForm){
    let data =Object.assign({},form.value);
    delete data.id;
    if(form.value.id==null)
    {this.firestore.collection('Books').add(data);
    this.toastr.success("Submitted SuccessFully","Books") }  
    else
   { this.firestore.doc('Books/'+form.value.id).update(data);
  
   this.toastr.info("Edited SuccessFully","Books");}
    this.resetForm(form);
   
    
  }
 

}
