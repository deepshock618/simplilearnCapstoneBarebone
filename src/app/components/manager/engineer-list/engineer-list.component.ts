import { Component, OnInit } from '@angular/core';
import { Engineer } from 'src/app/entities/engineer';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.css']
})
export class EngineerListComponent implements OnInit {

  engineers:Engineer[];

  constructor(private managerService:ManagerService) { }

  ngOnInit(): void {
    this.getAllEngineers();
  }

  private getAllEngineers(){
    this.managerService.getEngineersList().subscribe(data=>{
      this.engineers=data;
    });
  }
}
