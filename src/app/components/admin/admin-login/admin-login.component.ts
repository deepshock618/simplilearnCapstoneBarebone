import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/entities/admin';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin:Admin=new Admin();
  id:number;
  password:string;

  constructor(private adminService:AdminService ,private router:Router) { }

  ngOnInit(): void {
  }

  login(password:string)
  {
    this.admin.id=1;
    this.router.navigate(['admin-portal']);
  }
}
