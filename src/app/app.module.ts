import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { JobCardComponent } from './job-card/job-card.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { JobFiltersComponent } from './job-filters/job-filters.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { ApplicationSubmitSuccessComponent } from './application-submit-success/application-submit-success.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomeComponent,
    JobCardComponent,
    JobDetailsComponent,
    CreateJobComponent,
    JobFiltersComponent,
    ApplyJobComponent,
    ApplicationSubmitSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    EditorModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
