import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchFieldsValidator } from '../validators/matchFieldsValidator';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        contactNumber: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validators: matchFieldsValidator('password', 'confirmPassword') }
    );
  }

  register() {
    if (this.registerForm.valid) {
      this.authService
        .register({ ...this.registerForm.value, role: 'Job Seeker' })
        .subscribe({
          next: (_) => {
            this.router.navigate(['login']);
          },
          error: (e: any) => {
            this.error = e.error.message;
          },
        });
    }
  }
}
