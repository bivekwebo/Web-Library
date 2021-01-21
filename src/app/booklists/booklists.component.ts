import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Books } from './../services/books.model';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'booklists',
  templateUrl: './booklists.component.html',
  styleUrls: ['./booklists.component.css']
})
export class BooklistsComponent implements OnInit {
  searchText:string=""
list: Books[];
  constructor(public service:BooksService,public firestore:AngularFirestore,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe(actionArray=>{
this.list=actionArray.map(item=>{
  return {
    id:item.payload.doc.id,
    ...item.payload.doc.data() as {}
   } as Books
  })
    })
  }
  onEdit(book:Books) {
  this.service.formData=Object.assign({},book)
  console.log(this.service.formData)

  }
  onDelete(id:string){
    if(confirm("Are you sure want to delete this ?"))
    this.firestore.doc("Books/"+id).delete();
    this.toastr.error("Deleted SuccessFully","Books");
  
  }
  filterCondition(book){
    return book.name.toLowerCase().indexOf(this.searchText.toLowerCase())!=-1;
  }


}
