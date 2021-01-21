import { UsersGuard } from './users.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignedinComponent } from './signedin/signedin.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path :'' ,
  component :SigninComponent, },
  {
    path : 'authenticated',
    component :SignedinComponent,
    canActivate:[UsersGuard]
  },
  {
    path :'signup',
    component:LoginComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
