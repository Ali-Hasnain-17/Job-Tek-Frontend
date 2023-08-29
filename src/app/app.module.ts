import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { BoxComponent } from './box/box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { JobCardComponent } from './job-card/job-card.component';
import { JobDetailsComponent } from './job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    RegisterFormComponent,
    BoxComponent,
    HomeComponent,
    JobCardComponent,
    JobDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
