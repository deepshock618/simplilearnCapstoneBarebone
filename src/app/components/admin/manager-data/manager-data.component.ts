import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Manager } from 'src/app/entities/manager';


@Component({
  selector: 'app-manager-data',
  templateUrl: './manager-data.component.html',
  styleUrls: ['./manager-data.component.css']
})
export class ManagerDataComponent implements OnInit {

  managers:Manager[];
  constructor(private adminService: AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getAllManagers();

  }

  private getAllManagers(){
    this.adminService.getManagersList().subscribe(data=>{
      this.managers=data;
    });
  }
  goToUpdate(id:number)
  {
    this.router.navigate(['manager-update', id]);
  }
  removeManager(id:number)
  {
    this.adminService.deleteManager(id).subscribe(data=>{
      console.log(data);
    });
  }
  addManager()
  {
    this.router.navigate(['manager-add']);
  }
}
