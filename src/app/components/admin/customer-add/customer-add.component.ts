import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/entities/customer';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customer:Customer=new Customer();

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  saveCustomer(){
    this.adminService.saveCustomer(this.customer).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
    
  }
}
