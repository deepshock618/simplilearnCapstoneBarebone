import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-portal',
  templateUrl: './manager-portal.component.html',
  styleUrls: ['./manager-portal.component.css']
})
export class ManagerPortalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  engineerList()
  {
    this.router.navigate(['engineer-list']);
  }
  feedbackList()
  {
    this.router.navigate(['feedback-list-manager']);
  }
  issueManagement()
  {
    this.router.navigate(['issue-management']);
  }

}
