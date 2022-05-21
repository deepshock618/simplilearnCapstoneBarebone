import { Component, OnInit } from '@angular/core';
import { EngineerService } from 'src/app/services/engineer.service';
import { Feedback } from 'src/app/entities/feedback';

@Component({
  selector: 'app-feedback-list-engineer',
  templateUrl: './feedback-list-engineer.component.html',
  styleUrls: ['./feedback-list-engineer.component.css']
})
export class FeedbackListEngineerComponent implements OnInit {

  feedbacks:Feedback[];

  constructor(private engineerService:EngineerService) { }

  ngOnInit(): void {
    this.getAllFeedbacks();
  }

  private getAllFeedbacks(){
    this.engineerService.getFeedbacksList().subscribe(data=>{
      this.feedbacks=data;
    });
  }
}
