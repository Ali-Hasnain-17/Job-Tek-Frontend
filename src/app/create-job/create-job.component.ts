import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { JobService } from '../services/job.service';
import { Job } from '../types/Job';
import { format } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css'],
})
export class CreateJobComponent implements OnInit {
  createJobForm!: FormGroup;
  apiKey = environment.tinyApiKey;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.createJobForm = this.fb.group({
      title: ['', Validators.required],
      shortDescription: ['', Validators.required],
      detailedDescription: ['', Validators.required],
      companyName: ['', Validators.required],
      mode: 'On Site',
      type: 'Full Time',
      experience: 'Entry',
      location: ['', Validators.required],
    });
  }

  createJob() {
    if (this.createJobForm.valid) {
      const job: Job = this.createJobForm.value;
      this.jobService.createJob(job).subscribe({
        next: (_) => {
          this.router.navigate(['/']);
        },
      });
    }
  }
}
