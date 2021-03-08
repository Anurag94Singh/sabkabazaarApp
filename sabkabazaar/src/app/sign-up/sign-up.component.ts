import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup = new FormGroup({});

 

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null,Validators.required),
      lastName: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)])
    });
  }

  get firstname() {
    return this.signUpForm.get("firstName");
  }

  onSubmit(){
    console.log(this.signUpForm);
    this.http.get<any>('')
      .subscribe( data => {
        console.log(data);
      })
  }
}
