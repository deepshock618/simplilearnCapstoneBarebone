import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Engineer } from 'src/app/entities/engineer';

@Component({
  selector: 'app-engineer-update',
  templateUrl: './engineer-update.component.html',
  styleUrls: ['./engineer-update.component.css']
})
export class EngineerUpdateComponent implements OnInit {

  engineer:Engineer=new Engineer();
  id:number;

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.adminService.getEngineer(this.id).subscribe(data=>{
      this.engineer=data;
    },error=>console.log(error));
  }

  updateEngineer()
  {
    this.adminService.updateEngineer(this.engineer).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
  }
}
