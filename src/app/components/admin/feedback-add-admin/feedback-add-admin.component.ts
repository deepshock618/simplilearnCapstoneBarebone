import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Feedback } from 'src/app/entities/feedback';

@Component({
  selector: 'app-feedback-add-admin',
  templateUrl: './feedback-add-admin.component.html',
  styleUrls: ['./feedback-add-admin.component.css']
})
export class FeedbackAddAdminComponent implements OnInit {

  feedback:Feedback=new Feedback();

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  saveFeedback(){
    this.adminService.saveFeedback(this.feedback).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
    
  }
}
