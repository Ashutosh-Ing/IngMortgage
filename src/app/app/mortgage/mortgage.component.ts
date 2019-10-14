import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  mortgageForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.mortgageForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'emailId': new FormControl(null, Validators.required),
      'mobile': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log("onSubmit");
  }

  onPersonalClick() {
    console.log("Personal tab is clicked");
  }

}
