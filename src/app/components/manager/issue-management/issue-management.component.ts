import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/entities/issue';
import { ManagerService } from 'src/app/services/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-management',
  templateUrl: './issue-management.component.html',
  styleUrls: ['./issue-management.component.css']
})
export class IssueManagementComponent implements OnInit {

  issues:Issue[];

  constructor(private managerService: ManagerService,private router:Router) { }

  ngOnInit(): void {
    this.getAllIssues();
  }

  private getAllIssues(){
    this.managerService.getIssuesList().subscribe(data=>{
      this.issues=data;
    });
  }
  assignEngineerIssue(id:number)
  {
    this.router.navigate(['engineer-assignment', id]);
  }
}
