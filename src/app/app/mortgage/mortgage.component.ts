import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  mortgageForm: FormGroup;

  currentPage: string = "personal";

  constructor() { }

  ngOnInit() {
    this.currentPage = 'personal';

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

  onNextClick() {
    var me = this;

    if (me.currentPage === 'personal') {
      me.currentPage = 'employeement';
    } else if (me.currentPage === 'employeement') {
      me.currentPage = 'property';
    } else if (me.currentPage === 'property') {
      me.currentPage = 'loan';
    }
  }

  onPreviousClick() {
    var me = this;

    if (me.currentPage === 'loan') {
      me.currentPage = 'property';
    } else if (me.currentPage === 'property') {
      me.currentPage = 'employeement';
    } else if (me.currentPage === 'employeement') {
      me.currentPage = 'personal';
    }
  }

  onPersonalClick() {
    console.log("Personal tab is clicked");
    this.currentPage = 'personal';
  }

  onEmployeementClick() {
    this.currentPage = 'employeement';
  }

  onPropertyClick() {
    this.currentPage = 'property';
  }

  onLoanClick() {
    this.currentPage = 'loan';
  }

  showNext() {
    return !(this.currentPage === 'loan');
  }

  showPrevious() {
    return !(this.currentPage === 'personal');
  }

  showSubmit() {
    return (this.currentPage === 'loan');
  }

}
