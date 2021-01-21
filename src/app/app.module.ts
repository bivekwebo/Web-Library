import { ToastrModule } from 'ngx-toastr';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularFireModule, FirebaseApp } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { BooksComponent } from './books/books.component';
import { BooklistsComponent } from './booklists/booklists.component'
import { BooksService } from './services/books.service';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignedinComponent } from './signedin/signedin.component';
import { DialogComponent } from './dialog/dialog.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooklistsComponent,
    LoginComponent,
    SignedinComponent,
    DialogComponent,
    SigninComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([])
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
