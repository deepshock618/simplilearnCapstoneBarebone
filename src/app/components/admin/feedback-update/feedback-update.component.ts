import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from 'src/app/entities/feedback';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-feedback-update',
  templateUrl: './feedback-update.component.html',
  styleUrls: ['./feedback-update.component.css']
})
export class FeedbackUpdateComponent implements OnInit {

  feedback:Feedback=new Feedback();
  id:number;

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.adminService.getFeedback(this.id).subscribe(data=>{
      this.feedback=data;
    },error=>console.log(error));
  }

  updateFeedback()
  {
    this.adminService.updateFeedback(this.feedback).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
  }
}
