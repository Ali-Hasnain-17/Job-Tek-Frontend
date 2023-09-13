import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AlreadyAuthGuard } from './guards/already-auth.guard';
import { JobDetailsComponent } from './job-details/job-details.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { ApplicationSubmitSuccessComponent } from './application-submit-success/application-submit-success.component';

const routes: Routes = [
  { path: '', redirectTo: '/job', pathMatch: 'full' },
  {
    path: 'job',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'details/:id', component: JobDetailsComponent },
      { path: 'apply/success', component: ApplicationSubmitSuccessComponent },
      { path: 'apply/:id', component: ApplyJobComponent },
    ],
  },
  { path: 'create', canActivate: [AuthGuard], component: CreateJobComponent },
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [AlreadyAuthGuard],
  },
  {
    path: 'register',
    component: RegisterFormComponent,
    canActivate: [AlreadyAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
