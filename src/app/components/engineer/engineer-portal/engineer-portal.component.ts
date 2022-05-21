import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineer-portal',
  templateUrl: './engineer-portal.component.html',
  styleUrls: ['./engineer-portal.component.css']
})
export class EngineerPortalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  feedbackList()
  {
    this.router.navigate(['feedback-list-engineer']);
  }

  issueStatus()
  {
    this.router.navigate(['issue-status']);
  }
}
