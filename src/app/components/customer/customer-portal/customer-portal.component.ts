import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-portal',
  templateUrl: './customer-portal.component.html',
  styleUrls: ['./customer-portal.component.css']
})
export class CustomerPortalComponent implements OnInit {

  id:number;

  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  }

  customerIssues(id:number)
  {
    this.router.navigate(['customer-issues', id]);
  }

  addIssue(id:number)
  {
    this.router.navigate(['issues-add', id]);
  }
  feedbackAdd()
  {
    this.router.navigate(['feedback-add']);
  }
}
