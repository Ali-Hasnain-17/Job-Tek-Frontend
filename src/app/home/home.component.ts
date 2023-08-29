import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { Job } from '../types/Job';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  jobs!: Job[];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService
      .getAllJobs()
      .subscribe({ next: (data: Job[]) => (this.jobs = data) });
  }
}
