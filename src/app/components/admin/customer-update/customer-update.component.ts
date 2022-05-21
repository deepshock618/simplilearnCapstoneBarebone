import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/entities/customer';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  
  customer:Customer=new Customer();
  id:number;

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.adminService.getCustomer(this.id).subscribe(data=>{
      this.customer=data;
    },error=>console.log(error));
  }

  updateCustomer()
  {
    this.adminService.updateCustomer(this.customer).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
  }
}
