import { Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {

  constructor(private service: MyserviceService, private routes: Router) { }

  ngOnInit() {
  }
  check(uname: string, pwd: string) {
    var output = this.service.checkusernameandpassword(uname, pwd);
    if (output == true) {
      this.routes.navigate(['/success']);
    }
    else {
      this.routes.navigate(['/error']);
    }
  }
}