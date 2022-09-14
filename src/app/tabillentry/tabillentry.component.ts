import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tabillentry',
  templateUrl: './tabillentry.component.html',
  styleUrls: ['./tabillentry.component.css']
})
export class TabillentryComponent implements OnInit {

  constructor(private toastr: ToastrService) { }
  emp = '';branch = '';dept = '';
  ngOnInit(): void {
  }
  
  tabill: number = 0;
  busbill: number = 0;
  trainbill: number = 0;
  airbill: number = 0;
  total: number = 0;
  loginForm: FormGroup | any;

  staffno(){
    this.emp = "Employee Code : Emp123";
    this.branch = "Branch Code : BRANCH1";
    this.dept = "Department  : Transport";

}

save(){
  this.toastr.success('Successfully Submitted', 'Tnstckum!');

}

}
