import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../services/firebase.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  img:string="assets/images/webo.png"
  emailSignup:string=""
  passwordSignup:string =""
 
 isSignedIn = false;
   constructor(public firebaseService : FirebaseService,public auth:AuthService){ }
   ngOnInit() {
     if(localStorage.getItem('user')!==null)
    { this.isSignedIn=true
     this.auth.isSignedIn=true}
     else {
     this.isSignedIn = false
     this.auth.isSignedIn = true }
   }
   async onSignup(email:string,password:string){
     await this.firebaseService.signup(email,password)
     if(this.firebaseService.isLoggedIn){
     this.isSignedIn=true
     this.auth.isSignedIn=true }
   }
  
   handlelogout(){
     this.isSignedIn = false
     this.auth.isSignedIn=false
   }
 
 }
 