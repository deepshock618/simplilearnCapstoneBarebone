import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/entities/customer';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  customer:Customer=new Customer();
  id:number;
  password:string;

  constructor(private adminService:AdminService ,private router:Router) { }

  ngOnInit(): void {
  }

  login(id:number,password:string)
  {
    this.router.navigate(['customer-portal', id]);
  }
}
