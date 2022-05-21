import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Feedback } from 'src/app/entities/feedback';

@Component({
  selector: 'app-feedback-add',
  templateUrl: './feedback-add.component.html',
  styleUrls: ['./feedback-add.component.css']
})
export class FeedbackAddComponent implements OnInit {

  feedback:Feedback=new Feedback();

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  saveFeedback(){
    this.customerService.saveFeedback(this.feedback).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
    
  }

}
