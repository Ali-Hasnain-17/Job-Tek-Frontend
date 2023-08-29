import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AlreadyAuthGuard } from './guards/already-auth.guard';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'details/:id',
    component: JobDetailsComponent,
    canActivate: [AuthGuard],
  },
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
