import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../types/Job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  getAllJobs() {
    return this.http.get<Job[]>('/api/job');
  }

  getJobById(id: string) {
    return this.http.get<Job>(`/api/job/${id}`);
  }
}
