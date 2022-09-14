import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder,private router:Router,private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() { return this.loginForm.controls; }


  onSubmit(){
    if (this.loginForm.valid) {
    if(this.f.username.value == 'test' && this.f.password.value == 'test' )
    {
this.router.navigate(['/main']);      
    }else{
      this.toastr.error('Invalid Login!', 'Tnstckum!');
    }
    }}

    resetForm(){

      this.loginForm.reset();

    }
}
