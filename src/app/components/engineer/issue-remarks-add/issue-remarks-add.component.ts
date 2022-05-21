import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue } from 'src/app/entities/issue';
import { EngineerService } from 'src/app/services/engineer.service';



@Component({
  selector: 'app-issue-remarks-add',
  templateUrl: './issue-remarks-add.component.html',
  styleUrls: ['./issue-remarks-add.component.css']
})
export class IssueRemarksAddComponent implements OnInit {

  issue:Issue=new Issue();
  id:number;

  constructor(private route: ActivatedRoute,private engineerService:EngineerService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.engineerService.getIssue(this.id).subscribe(data=>{
      this.issue=data;
    },error=>console.log(error));
  }

  addRemarks(remarks:string)
  {
    this.issue.remarks=remarks;
    this.engineerService.updateIssue(this.issue).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
  }
}
