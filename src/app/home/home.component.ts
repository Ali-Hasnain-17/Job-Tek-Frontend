import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JobService } from '../services/job.service';
import { Job } from '../types/Job';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  jobs!: Job[];
  showFilters: boolean = false;
  filtersCount: number = 0;

  @ViewChild('job') jobInput!: ElementRef<HTMLInputElement>;
  @ViewChild('location') locationInput!: ElementRef<HTMLInputElement>;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    this.jobService
      .getAllJobs()
      .subscribe({ next: (data: Job[]) => (this.jobs = data) });
  }

  searchJob() {
    const job = this.jobInput.nativeElement.value;
    const location = this.locationInput.nativeElement.value;

    this.jobService.searchJob(job, location).subscribe({
      next: (data: Job[]) => {
        this.jobs = data;
        this.jobInput.nativeElement.value = '';
        this.locationInput.nativeElement.value = '';
      },
    });
  }

  filterJobs($event: any) {
    this.filtersCount = $event.filterCount;
    this.jobService
      .filterJob($event.mode, $event.type, $event.applicants, $event.experience)
      .subscribe({ next: (data: Job[]) => (this.jobs = data) });
  }

  clearFilters() {
    this.filtersCount = 0;
    this.getJobs();
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }
}
