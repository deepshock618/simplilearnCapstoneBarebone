import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue } from 'src/app/entities/issue';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-engineer-assignment',
  templateUrl: './engineer-assignment.component.html',
  styleUrls: ['./engineer-assignment.component.css']
})
export class EngineerAssignmentComponent implements OnInit {

  issue:Issue=new Issue();
  id:number;
  constructor(private route: ActivatedRoute,private managerService:ManagerService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.managerService.getIssue(this.id).subscribe(data=>{
      this.issue=data;
    },error=>console.log(error));
  }

  assignEngineer(engineerId:number)
  {
    this.issue.engineerId=engineerId;
    this.managerService.updateIssue(this.issue).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
  }
}
