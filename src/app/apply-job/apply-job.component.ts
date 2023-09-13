import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../services/job.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css'],
})
export class ApplyJobComponent {
  resume!: File;
  resumeUrl: string = '';
  resumeFileName: string = '';
  jobId!: string;
  applyJobForm!: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => (this.jobId = params.get('id')!)
    );
    this.initializeForm();
  }

  initializeForm() {
    this.applyJobForm = this.fb.group({
      name: ['', Validators.required],
      experience: ['', Validators.required],
      linkedinUrl: '',
      githubUrl: '',
    });
  }

  selectResume($event: any) {
    $event.preventDefault();
    this.resume = $event.target.files[0];
    this.resumeFileName = this.resume.name;
  }

  uploadResume() {
    this.jobService.uploadResume(this.resume).subscribe({
      next: (data: { resumeUrl: string }) => {
        this.resumeUrl = data.resumeUrl;
        this.resumeFileName = '';
      },
    });
  }

  applyForJob() {
    if (this.applyJobForm.valid && this.resumeUrl) {
      this.jobService
        .applyForJob(this.jobId, {
          ...this.applyJobForm.value,
          resumeUrl: this.resumeUrl,
        })
        .subscribe({
          next: (_) => this.router.navigate(['job', 'apply', 'success']),
          error: (e: any) => (this.error = e.error.message),
        });
    }
  }
}
