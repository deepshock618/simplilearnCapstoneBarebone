import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {


  customers: Customer[];

  constructor(private adminService: AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  private getAllCustomers(){
    this.adminService.getCustomersList().subscribe(data=>{
      this.customers=data;
    });
  }
  
  goToUpdate(id:number)
  {
    this.router.navigate(['customer-update', id]);
  }
  removeCustomer(id:number)
  {
    this.adminService.deleteCustomer(id).subscribe(data=>{
      console.log(data);
    });
  }
  addCustomer()
  {
    this.router.navigate(['customer-add']);
  }
}
