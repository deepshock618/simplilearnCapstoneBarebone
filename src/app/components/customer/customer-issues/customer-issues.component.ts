import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/entities/issue';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-issues',
  templateUrl: './customer-issues.component.html',
  styleUrls: ['./customer-issues.component.css']
})
export class CustomerIssuesComponent implements OnInit {

  issues:Issue[];
  id:number;

  constructor(private customerService: CustomerService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.getCustomerIssues(this.id);
  }

  private getCustomerIssues(id){
    this.customerService.getCustomerIssuesList(id).subscribe(data=>{
      this.issues=data;
    });
  }
}
