import { Component, OnInit,Output } from '@angular/core';
import { EventEmitter} from  '@angular/core';
import { FirebaseService } from './../services/firebase.service';

@Component({
  selector: 'signedin',
  templateUrl: './signedin.component.html',
  styleUrls: ['./signedin.component.css']
})
export class SignedinComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  
  constructor(public firebaseService:FirebaseService) { }


  ngOnInit(): void {
  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }
}
