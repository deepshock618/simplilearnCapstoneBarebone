import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Engineer } from 'src/app/entities/engineer';



@Component({
  selector: 'app-engineer-data',
  templateUrl: './engineer-data.component.html',
  styleUrls: ['./engineer-data.component.css']
})
export class EngineerDataComponent implements OnInit {

  engineers:Engineer[];

  constructor(private adminService: AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getAllEngineers();
  }

  private getAllEngineers(){
    this.adminService.getEngineersList().subscribe(data=>{
      this.engineers=data;
    });
  }
  goToUpdate(id:number)
  {
    this.router.navigate(['engineer-update', id]);
  }
  removeEngineer(id:number)
  {
    this.adminService.deleteEngineer(id).subscribe(data=>{
      console.log(data);
    });
  }
  addEngineer()
  {
    this.router.navigate(['engineer-add']);
  }
}
