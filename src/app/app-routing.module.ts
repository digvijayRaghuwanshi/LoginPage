import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';

const routes : Routes = [
  { path: "success",  component : SuccessComponent},
  { path: "login", component : LoginComponent },
  { path: "error", component : ErrorComponent},
  { path: "", component : LoginComponent },
  
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
