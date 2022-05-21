import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manager } from 'src/app/entities/manager';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manager-update',
  templateUrl: './manager-update.component.html',
  styleUrls: ['./manager-update.component.css']
})
export class ManagerUpdateComponent implements OnInit {

  manager:Manager=new Manager();
  id:number;
  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.adminService.getManager(this.id).subscribe(data=>{
      this.manager=data;
    },error=>console.log(error));
  }

  updateManager()
  {
    this.adminService.updateManager(this.manager).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
  }
}
