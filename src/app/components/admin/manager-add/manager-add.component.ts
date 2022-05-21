import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Manager } from 'src/app/entities/manager';


@Component({
  selector: 'app-manager-add',
  templateUrl: './manager-add.component.html',
  styleUrls: ['./manager-add.component.css']
})
export class ManagerAddComponent implements OnInit {
  manager:Manager=new Manager();

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  saveManager(){
    this.adminService.saveManager(this.manager).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
    
  }
}
