import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../entities/issue';
import { Admin } from '../entities/admin';
import { Engineer } from '../entities/engineer';
import { Customer } from '../entities/customer';
import { Feedback } from '../entities/feedback';
import { Manager } from '../entities/manager';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl:string="http://localhost:8585/admin";


  constructor(private httpClient: HttpClient) { }

  getIssuesList(): Observable<Issue[]>{
    
    return this.httpClient.get<Issue[]>(`${this.baseUrl}/issues`);
  }

  getIssue(id:number): Observable<Issue>{
    
    return this.httpClient.get<Issue>(`${this.baseUrl}/issue/${id}`);
  }

  saveIssue(issue:Issue): Observable<Object>{
    
    return this.httpClient.post(`${this.baseUrl}/issue`,issue);
  }

  updateIssue(issue:Issue): Observable<Object>{
    
    return this.httpClient.put(`${this.baseUrl}/issue`,issue);
  }

  deleteIssue(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/issue/${id}`);
  }

  getEngineersList(): Observable<Engineer[]>{
    
    return this.httpClient.get<Engineer[]>(`${this.baseUrl}/engineers`);
  }

  getEngineer(id:number): Observable<Engineer>{
    
    return this.httpClient.get<Engineer>(`${this.baseUrl}/engineer/${id}`);
  }

  saveEngineer(engineer:Engineer): Observable<Object>{
    
    return this.httpClient.post(`${this.baseUrl}/engineer`,engineer);
  }

  updateEngineer(engineer:Engineer): Observable<Object>{
    
    return this.httpClient.put(`${this.baseUrl}/engineer`,engineer);
  }

  deleteEngineer(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/engineer/${id}`);
  }

  getManagersList(): Observable<Manager[]>{
    
    return this.httpClient.get<Manager[]>(`${this.baseUrl}/managers`);
  }

  getManager(id:number): Observable<Manager>{
    
    return this.httpClient.get<Manager>(`${this.baseUrl}/manager/${id}`);
  }

  saveManager(manager:Manager): Observable<Object>{
    
    return this.httpClient.post(`${this.baseUrl}/manager`,manager);
  }

  updateManager(manager:Manager): Observable<Object>{
    
    return this.httpClient.put(`${this.baseUrl}/manager`,manager);
  }

  deleteManager(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/manager/${id}`);
  }

  getFeedbacksList(): Observable<Feedback[]>{
    
    return this.httpClient.get<Feedback[]>(`${this.baseUrl}/feedbacks`);
  }

  getFeedback(id:number): Observable<Feedback>{
    
    return this.httpClient.get<Feedback>(`${this.baseUrl}/feedback/${id}`);
  }

  saveFeedback(feedback:Feedback): Observable<Object>{
    
    return this.httpClient.post(`${this.baseUrl}/feedback`,feedback);
  }

  updateFeedback(feedback:Feedback): Observable<Object>{
    
    return this.httpClient.put(`${this.baseUrl}/feedback`,feedback);
  }

  deleteFeedback(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/feedback/${id}`);
  }

  getCustomersList(): Observable<Customer[]>{
    
    return this.httpClient.get<Customer[]>(`${this.baseUrl}/customers`);
  }

  getCustomer(id:number): Observable<Customer>{
    
    return this.httpClient.get<Customer>(`${this.baseUrl}/customer/${id}`);
  }

  saveCustomer(customer:Customer): Observable<Object>{
    
    return this.httpClient.post(`${this.baseUrl}/customer`,customer);
  }

  updateCustomer(customer:Customer): Observable<Object>{
    
    return this.httpClient.put(`${this.baseUrl}/customer`,customer);
  }

  deleteCustomer(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/customer/${id}`);
  }
}
