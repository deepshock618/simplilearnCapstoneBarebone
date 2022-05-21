import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Manager } from 'src/app/entities/manager';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {

  manager:Manager=new Manager();
  id:number;
  password:string;

  constructor(private router:Router,private adminService:AdminService) { }

  ngOnInit(): void {
  }

  login(id:number,password:string)
  {
    this.router.navigate(['manager-portal', id]);
  }
}
