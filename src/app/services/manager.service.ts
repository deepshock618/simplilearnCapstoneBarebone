import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../entities/issue';
import { Engineer } from '../entities/engineer';
import { Feedback } from '../entities/feedback';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private baseUrl:string="http://localhost:8585/manager";

  constructor(private httpClient: HttpClient) { }
  
  getIssuesList(): Observable<Issue[]>{
    
    return this.httpClient.get<Issue[]>(`${this.baseUrl}/issues`);
  }

  getIssue(id:number): Observable<Issue>{
    
    return this.httpClient.get<Issue>(`${this.baseUrl}/issue/${id}`);
  }

  updateIssue(issue:Issue): Observable<Object>{
    
    return this.httpClient.put(`${this.baseUrl}/issue`,issue);
  }

  getEngineersList(): Observable<Engineer[]>{
    
    return this.httpClient.get<Engineer[]>(`${this.baseUrl}/engineers`);
  }

  getFeedbacksList(): Observable<Feedback[]>{
    
    return this.httpClient.get<Feedback[]>(`${this.baseUrl}/feedbacks`);
  }
}
