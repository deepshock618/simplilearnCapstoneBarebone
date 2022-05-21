import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { CustomerLoginComponent } from './components/customer/customer-login/customer-login.component';
import { CustomerPortalComponent } from './components/customer/customer-portal/customer-portal.component';
import { IssueAddComponent } from './components/customer/issue-add/issue-add.component';
import { CustomerIssuesComponent } from './components/customer/customer-issues/customer-issues.component';
import { FeedbackAddComponent } from './components/customer/feedback-add/feedback-add.component';

import { EngineerLoginComponent } from './components/engineer/engineer-login/engineer-login.component';
import { EngineerPortalComponent } from './components/engineer/engineer-portal/engineer-portal.component';
import { FeedbackListEngineerComponent } from './components/engineer/feedback-list-engineer/feedback-list-engineer.component';
import { IssueStatusComponent } from './components/engineer/issue-status/issue-status.component';
import { IssueStatusUpdateComponent } from './components/engineer/issue-status-update/issue-status-update.component';
import { IssueRemarksAddComponent } from './components/engineer/issue-remarks-add/issue-remarks-add.component';

import { ManagerLoginComponent } from './components/manager/manager-login/manager-login.component';
import { ManagerPortalComponent } from './components/manager/manager-portal/manager-portal.component';
import { EngineerListComponent } from './components/manager/engineer-list/engineer-list.component';
import { FeedbackListManagerComponent } from './components/manager/feedback-list-manager/feedback-list-manager.component';
import { IssueManagementComponent } from './components/manager/issue-management/issue-management.component';
import { EngineerAssignmentComponent } from './components/manager/engineer-assignment/engineer-assignment.component';



import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminPortalComponent } from './components/admin/admin-portal/admin-portal.component';

import { CustomerDataComponent } from './components/admin/customer-data/customer-data.component';
import { CustomerAddComponent } from './components/admin/customer-add/customer-add.component';
import { CustomerUpdateComponent } from './components/admin/customer-update/customer-update.component';

import { ManagerDataComponent } from './components/admin/manager-data/manager-data.component';
import { ManagerAddComponent } from './components/admin/manager-add/manager-add.component';
import { ManagerUpdateComponent } from './components/admin/manager-update/manager-update.component';

import { EngineerDataComponent } from './components/admin/engineer-data/engineer-data.component';
import { EngineerAddComponent } from './components/admin/engineer-add/engineer-add.component';
import { EngineerUpdateComponent } from './components/admin/engineer-update/engineer-update.component';

import { FeedbackDataComponent } from './components/admin/feedback-data/feedback-data.component';
import { FeedbackAddAdminComponent } from './components/admin/feedback-add-admin/feedback-add-admin.component';
import { FeedbackUpdateComponent } from './components/admin/feedback-update/feedback-update.component';

import { IssueDataComponent } from './components/admin/issue-data/issue-data.component';
import { IssueAddAdminComponent } from './components/admin/issue-add-admin/issue-add-admin.component';
import { IssueUpdateComponent } from './components/admin/issue-update/issue-update.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'customer-login',
    component:CustomerLoginComponent,
    pathMatch:'full'
  },
  {
    path:'manager-login',
    component:ManagerLoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin-login',
    component:AdminLoginComponent,
    pathMatch:'full'
  },
  {
    path:'engineer-login',
    component:EngineerLoginComponent,
    pathMatch:'full'
  },
  {
    path:'engineer-portal/:id',
    component:EngineerPortalComponent,
    pathMatch:'full'
  },
  {
    path:'feedback-list-engineer',
    component:FeedbackListEngineerComponent,
    pathMatch:'full'
  },
  {
    path:'issue-status',
    component:IssueStatusComponent,
    pathMatch:'full'
  },
  {
    path:'issue-status-update/:id',
    component:IssueStatusUpdateComponent,
    pathMatch:'full'
  },
  {
    path:'issue-remarks-add/:id',
    component:IssueRemarksAddComponent,
    pathMatch:'full'
  },
  {
    path:'manager-login',
    component:FeedbackAddComponent,
    pathMatch:'full'
  },
  {
    path:'manager-portal/:id',
    component:ManagerPortalComponent,
    pathMatch:'full'
  },
  {
    path:'engineer-list',
    component:EngineerListComponent,
    pathMatch:'full'
  },
  {
    path:'feedback-list-manager',
    component:FeedbackListManagerComponent,
    pathMatch:'full'
  },
  {
    path:'issue-management',
    component:IssueManagementComponent,
    pathMatch:'full'
  },
  {
    path:'engineer-assignment/:id',
    component:EngineerAssignmentComponent,
    pathMatch:'full'
  },
  {
    path:'customer-portal/:id',
    component:CustomerPortalComponent,
    pathMatch:'full'
  },
  {
    path:'issues-add/:id',
    component:IssueAddComponent,
    pathMatch:'full'
  },
  {
    path:'customer-issues/:id',
    component:CustomerIssuesComponent,
    pathMatch:'full'
  },
  {
    path:'feedback-add',
    component:FeedbackAddComponent,
    pathMatch:'full'
  },
  {
    path:'admin-portal',
    component:AdminPortalComponent,
    pathMatch:'full'
  },
  {
    path:'customer-data',
    component:CustomerDataComponent,
    pathMatch:'full'
  },
  {
    path:'customer-add',
    component:CustomerAddComponent,
    pathMatch:'full'
  },
  {
    path:'customer-update/:id',
    component:CustomerUpdateComponent,
    pathMatch:'full'
  },
  {
    path:'manager-data',
    component:ManagerDataComponent,
    pathMatch:'full'
  },
  {
    path:'manager-add',
    component:ManagerAddComponent,
    pathMatch:'full'
  },
  {
    path:'manager-update/:id',
    component:ManagerUpdateComponent,
    pathMatch:'full'
  },
  {
    path:'engineer-data',
    component:EngineerDataComponent,
    pathMatch:'full'
  },
  {
    path:'engineer-add',
    component:EngineerAddComponent,
    pathMatch:'full'
  },
  {
    path:'engineer-update/:id',
    component:EngineerUpdateComponent,
    pathMatch:'full'
  },
  {
    path:'feedback-data',
    component:FeedbackDataComponent,
    pathMatch:'full'
  },
  {
    path:'feedback-add-admin',
    component:FeedbackAddAdminComponent,
    pathMatch:'full'
  },
  {
    path:'feedback-update/:id',
    component:FeedbackUpdateComponent,
    pathMatch:'full'
  },
  {
    path:'issue-data',
    component:IssueDataComponent,
    pathMatch:'full'
  },
  {
    path:'issue-add-admin',
    component:IssueAddAdminComponent,
    pathMatch:'full'
  },
  {
    path:'issue-update/:id',
    component:IssueUpdateComponent,
    pathMatch:'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
