import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup = new FormGroup({});

 

  constructor() { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null,Validators.required),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)])
    });
  }

  get email() {
    return this.signInForm.get("email");
  }

  GetForm(){
    console.log(this.signInForm)
  }

}
