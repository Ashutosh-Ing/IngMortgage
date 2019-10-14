import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  userName: string = 'Employee1';
  accountNumber: string = ''
  loanAmount: number = 0;
  depositAmount: number = 0;
  balance: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
