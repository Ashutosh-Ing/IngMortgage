import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  mortgageForm: FormGroup;

  currentPage: string = "personal";

  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  ngOnInit() {
    this.currentPage = 'personal';

    // this.mortgageForm = new FormGroup({
    //   'firstname': new FormControl(null, Validators.required),
    //   'lastname': new FormControl(null, Validators.required),
    //   'email': new FormControl(null, Validators.required),
    //   'mobile': new FormControl(null),
    //   'modeOfEmployment': new FormControl(null),
    //   'organizationName': new FormControl(null),
    //   'salary': new FormControl(null),
    //   'propertyType': new FormControl(null),
    //   'propertyLocation': new FormControl(null),
    //   'propertyNumber': new FormControl(null),
    //   'propertyValue': new FormControl(null),
    //   'loanAmount': new FormControl(null),
    //   'deposit': new FormControl(null)
    // });

    this.mortgageForm = new FormGroup({
      'personal': new FormGroup({
        'firstname': new FormControl(null, Validators.required),
        'lastname': new FormControl(null, Validators.required),
        'email': new FormControl(null, Validators.required),
        'mobile': new FormControl(null)
      }),
      'employeement': new FormGroup({
        'modeOfEmployment': new FormControl(null),
        'organizationName': new FormControl(null),
        'salary': new FormControl(null)
      }),
      'property': new FormGroup({
        'propertyType': new FormControl(null),
        'propertyLocation': new FormControl(null),
        'propertyNumber': new FormControl(null),
        'propertyValue': new FormControl(null)
      }),
      'loan': new FormGroup({
        'loanAmount': new FormControl(null),
        'deposit': new FormControl(null)
      })
    });
  }

  onSubmit() {
    console.log("onSubmit");

    let mortgage = this.httpClient.post(environment.apiUrl + '/mortgage', this.mortgageForm.value);

    mortgage.subscribe((response: any) => {
      console.log(response);
    }, error => {
      console.log(error);
      this.toastr.error('Error', 'Error occured on creating Mortgage Account!');
    });
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
