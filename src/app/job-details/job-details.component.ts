import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Job } from '../types/Job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  jobId!: string;
  job!: Job;

  constructor(private route: ActivatedRoute, private jobService: JobService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => (this.jobId = params.get('id')!)
    );
    this.jobService.getJobById(this.jobId).subscribe((job) => (this.job = job));
  }

  getExperience(experienceLevel: number) {
    if (experienceLevel >= 4) {
      return 'Senior';
    } else if (experienceLevel <= 4 && experienceLevel >= 2) {
      return 'Mid/Senior';
    } else {
      return 'Entry';
    }
  }
}
