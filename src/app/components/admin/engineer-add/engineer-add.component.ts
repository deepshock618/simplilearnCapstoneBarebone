import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Engineer } from 'src/app/entities/engineer';

@Component({
  selector: 'app-engineer-add',
  templateUrl: './engineer-add.component.html',
  styleUrls: ['./engineer-add.component.css']
})
export class EngineerAddComponent implements OnInit {
  engineer:Engineer=new Engineer();

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  saveEngineer(){
    this.adminService.saveEngineer(this.engineer).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
    
  }
}
