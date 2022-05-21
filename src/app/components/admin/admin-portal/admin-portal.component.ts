import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  customerData()
  {
    this.router.navigate(['customer-data']);
  }
  managerData()
  {
    this.router.navigate(['manager-data']);
  }
  engineerData()
  {
    this.router.navigate(['engineer-data']);
  }
  feedbackData()
  {
    this.router.navigate(['feedback-data']);
  }
  issueData()
  {
    this.router.navigate(['issue-data']);
  }
}
