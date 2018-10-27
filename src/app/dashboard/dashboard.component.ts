import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  registration: FormGroup;
  constructor(private fB: FormBuilder) { }

  ngOnInit() {

    this.registration = this.fB.group({
      firstName: [''],
      lastName: [''],
      emailID: ['']
    });

  }

  // name = new FormControl('');

}
