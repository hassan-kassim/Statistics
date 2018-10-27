import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'header-nav',
  templateUrl: './headerBar.component.html',
  //styleUrls: ['./app.component.css']
})
export class headerNavComponent {
  //title = 'app';
  searchForm: FormGroup;
  constructor(private fb:FormBuilder){

  }

  ngOnInit() {

    this.searchForm = this.fb.group({
      search :['']
      });

      this.searchForm.valueChanges.subscribe(val => {
        console.warn("seach Index Value Changed",this.searchForm.value);
         
        });
  }


  


    getSearch(){
      console.warn(this.searchForm.value);
    }

   

}
