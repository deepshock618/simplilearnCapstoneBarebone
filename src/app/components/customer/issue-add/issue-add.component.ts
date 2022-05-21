import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/entities/issue';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-issue-add',
  templateUrl: './issue-add.component.html',
  styleUrls: ['./issue-add.component.css']
})
export class IssueAddComponent implements OnInit {

  issue:Issue=new Issue();
  customerId:number;

  constructor(private customerService:CustomerService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.customerId=this.route.snapshot.params['id'];
    this.issue.customerId=this.customerId;
  }

  saveIssue(){
    
    this.customerService.saveIssue(this.issue).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
    
  }
}
