import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerLoginComponent,
    ManagerLoginComponent,
    EngineerLoginComponent,
    CustomerPortalComponent,
    IssueAddComponent,
    CustomerIssuesComponent,
    FeedbackAddComponent,
    AdminLoginComponent,
    EngineerPortalComponent,
    FeedbackListEngineerComponent,
    IssueStatusComponent,
    IssueStatusUpdateComponent,
    IssueRemarksAddComponent,
    ManagerPortalComponent,
    EngineerListComponent,
    FeedbackListManagerComponent,
    IssueManagementComponent,
    EngineerAssignmentComponent,
    AdminPortalComponent,
    CustomerDataComponent,
    ManagerDataComponent,
    EngineerDataComponent,
    FeedbackDataComponent,
    IssueDataComponent,
    CustomerAddComponent,
    CustomerUpdateComponent,
    ManagerAddComponent,
    ManagerUpdateComponent,
    EngineerAddComponent,
    EngineerUpdateComponent,
    FeedbackAddAdminComponent,
    FeedbackUpdateComponent,
    IssueAddAdminComponent,
    IssueUpdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
