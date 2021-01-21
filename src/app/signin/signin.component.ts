import { AuthService } from './../services/auth.service';
import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  img:string="assets/images/webo.png"

  emailSignin:string= ""
  passwordSignin:string = ""
  isSignedIn = false;

  constructor(public firebaseService:FirebaseService,public auth:AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
   { this.isSignedIn=true
    this.auth.isSignedIn=true }
    else {
    this.isSignedIn = false
    this.auth.isSignedIn=false }
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn){
    this.isSignedIn=true
    this.auth.isSignedIn=true }
  }
  handlelogout(){
    this.isSignedIn = false
    this.auth.isSignedIn=false
  }

}
