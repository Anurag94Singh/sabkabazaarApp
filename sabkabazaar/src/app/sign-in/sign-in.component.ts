import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup = new FormGroup({});

 

  constructor(private route : Router) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(6)])
    });
  }

  get signin() {
    console.log(this.signInForm.controls)
    return this.signInForm.controls;
  }

  onSubmit() {
    console.log(this.signInForm);
    // this.route.navigate([''], { state: this.signInForm.value });
    // this.signInForm.su
  }

}
