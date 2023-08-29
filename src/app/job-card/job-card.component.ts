import { Component, Input } from '@angular/core';
import { Job } from '../types/Job';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css'],
})
export class JobCardComponent {
  @Input() job!: Job;

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
