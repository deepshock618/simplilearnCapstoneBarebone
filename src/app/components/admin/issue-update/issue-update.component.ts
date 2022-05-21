import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Issue } from 'src/app/entities/issue';


@Component({
  selector: 'app-issue-update',
  templateUrl: './issue-update.component.html',
  styleUrls: ['./issue-update.component.css']
})
export class IssueUpdateComponent implements OnInit {

  issue:Issue= new Issue();
  id:number;

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.adminService.getIssue(this.id).subscribe(data=>{
      this.issue=data;
    },error=>console.log(error));
  }

  updateIssue()
  {
    this.adminService.updateIssue(this.issue).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
  }

}
