import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { user } from '../User';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  userList: user[] = [];
  
  form: FormGroup;

  addUser(form) {
    this.userList.push(form.value);
    console.log((this.userList));
  }
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      lname: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      Age: new FormControl('',[Validators.required, Validators.pattern('[0-9]*')])
    })
  }
}