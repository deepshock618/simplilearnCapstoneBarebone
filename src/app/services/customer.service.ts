import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../entities/issue';
import { Feedback } from '../entities/feedback';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl:string="http://localhost:8585/customer";

  constructor(private httpClient: HttpClient) { }

  saveIssue(issue:Issue): Observable<Object>{
    
    return this.httpClient.post(`${this.baseUrl}/issue`,issue);
  }

  getCustomerIssuesList(cId:number): Observable<Issue[]>{
    
    return this.httpClient.get<Issue[]>(`${this.baseUrl}/issues/${cId}`);
  }

  getIssue(id:number): Observable<Issue>{
    
    return this.httpClient.get<Issue>(`${this.baseUrl}/issue/${id}`);
  }

  saveFeedback(feedback:Feedback): Observable<Object>{
    
    return this.httpClient.post(`${this.baseUrl}/feedback`,feedback);
  }

}
