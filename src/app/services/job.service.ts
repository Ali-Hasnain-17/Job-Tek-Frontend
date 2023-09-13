import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../types/Job';
import { JobApplication } from '../types/JobApplication';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  createJob(job: Job) {
    return this.http.post<Job>('/api/job', job);
  }

  getAllJobs() {
    return this.http.get<Job[]>('/api/job');
  }

  getJobById(id: string) {
    return this.http.get<Job>(`/api/job/${id}`);
  }

  searchJob(job: string, location: string) {
    const queryParams: { job?: string; location?: string } = {};

    if (job) {
      queryParams.job = job;
    }

    if (location) {
      queryParams.location = location;
    }

    return this.http.get<Job[]>('/api/job/search', { params: queryParams });
  }

  filterJob(
    mode: string,
    type: string,
    applicants: string,
    experience: string
  ) {
    const queryParams: {
      mode?: string;
      type?: string;
      applicants?: string;
      experience?: string;
    } = {};

    if (mode) {
      queryParams.mode = mode;
    }

    if (type) {
      queryParams.type = type;
    }

    if (applicants) {
      queryParams.applicants = applicants;
    }

    if (experience) {
      queryParams.experience = experience;
    }

    return this.http.get<Job[]>('/api/job', { params: queryParams });
  }

  uploadResume(resume: File) {
    const formData = new FormData();
    formData.set('resume', resume);
    return this.http.post<{ resumeUrl: string }>('/api/job/upload', formData);
  }

  applyForJob(jobId: string, application: JobApplication) {
    return this.http.post<JobApplication>(
      `/api/job/apply/${jobId}`,
      application
    );
  }
}
