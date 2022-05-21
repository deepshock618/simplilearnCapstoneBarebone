import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/entities/issue';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-issue-data',
  templateUrl: './issue-data.component.html',
  styleUrls: ['./issue-data.component.css']
})
export class IssueDataComponent implements OnInit {

  issues:Issue[];

  constructor(private adminService: AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getAllIssues();
  }

  private getAllIssues(){
    this.adminService.getIssuesList().subscribe(data=>{
      this.issues=data;
    });
  }
  goToUpdate(id:number)
  {
    this.router.navigate(['issue-update', id]);
  }
  removeIssue(id:number)
  {
    this.adminService.deleteIssue(id).subscribe(data=>{
      console.log(data);
    });
  }

  addIssue()
  {
    this.router.navigate(['issue-add-admin']);
  }
}
