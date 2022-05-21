import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/entities/issue';
import { EngineerService } from 'src/app/services/engineer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-status',
  templateUrl: './issue-status.component.html',
  styleUrls: ['./issue-status.component.css']
})
export class IssueStatusComponent implements OnInit {

  issues:Issue[];

  constructor(private engineerService: EngineerService,private router:Router) { }

  ngOnInit(): void {
    this.getAllIssues();
  }

  private getAllIssues(){
    this.engineerService.getIssuesList().subscribe(data=>{
      this.issues=data;
    });
  }

  issueStatusUpdate(id:number)
  {
    this.router.navigate(['issue-status-update', id]);
  }

  issueRemarksAdd(id:number,password:string)
  {
    this.router.navigate(['issue-remarks-add', id]);
  }
}
