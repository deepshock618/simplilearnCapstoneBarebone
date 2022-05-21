import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Engineer } from 'src/app/entities/engineer';

@Component({
  selector: 'app-engineer-login',
  templateUrl: './engineer-login.component.html',
  styleUrls: ['./engineer-login.component.css']
})
export class EngineerLoginComponent implements OnInit {

  engineer:Engineer=new Engineer();
  id:number;
  password:string;

  constructor(private adminService:AdminService ,private router:Router) { }

  ngOnInit(): void {
  }

  login(id:number,password:string)
  {
    this.router.navigate(['engineer-portal', id]);
  }
}
