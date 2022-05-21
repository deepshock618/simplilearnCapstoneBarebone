import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/entities/feedback';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-feedback-list-manager',
  templateUrl: './feedback-list-manager.component.html',
  styleUrls: ['./feedback-list-manager.component.css']
})
export class FeedbackListManagerComponent implements OnInit {

  feedbacks:Feedback[];

  constructor(private managerService:ManagerService) { }

  ngOnInit(): void {
    this.getAllFeedbacks();

  }

  private getAllFeedbacks(){
    this.managerService.getFeedbacksList().subscribe(data=>{
      this.feedbacks=data;
    });
  }
}
