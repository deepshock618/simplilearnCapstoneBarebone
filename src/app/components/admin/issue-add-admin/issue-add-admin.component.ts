import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/entities/issue';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-issue-add-admin',
  templateUrl: './issue-add-admin.component.html',
  styleUrls: ['./issue-add-admin.component.css']
})
export class IssueAddAdminComponent implements OnInit {

  issue:Issue=new Issue();


  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  saveIssue(){
    this.adminService.saveIssue(this.issue).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
    
  }

}
