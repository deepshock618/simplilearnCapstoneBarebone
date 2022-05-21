import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/entities/feedback';


@Component({
  selector: 'app-feedback-data',
  templateUrl: './feedback-data.component.html',
  styleUrls: ['./feedback-data.component.css']
})
export class FeedbackDataComponent implements OnInit {

  feedbacks:Feedback[];
  constructor(private adminService: AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getAllFeedbacks();
  }

  private getAllFeedbacks(){
    this.adminService.getFeedbacksList().subscribe(data=>{
      this.feedbacks=data;
    });
  }
  goToUpdate(id:number)
  {
    this.router.navigate(['feedback-update', id]);
  }
  removeFeedback(id:number)
  {
    this.adminService.deleteFeedback(id).subscribe(data=>{
      console.log(data);
    });
  }
  addFeedback()
  {
    this.router.navigate(['feedback-add-admin']);
  }
}
