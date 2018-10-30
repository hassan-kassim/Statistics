import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['']
  });

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.loginForm.value);

  }

}
