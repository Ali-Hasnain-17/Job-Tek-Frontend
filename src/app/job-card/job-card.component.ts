import { Component, Input } from '@angular/core';
import { Job } from '../types/Job';
import { Router } from '@angular/router';
import { formatDistance } from 'date-fns';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css'],
})
export class JobCardComponent {
  @Input() job!: Job;

  constructor(public router: Router) {}

  getPlural(number: number, singular: string, plural: string) {
    const pluralRules = new Intl.PluralRules();
    return pluralRules.select(number) === 'one' ? singular : plural;
  }

  timeAgo(date: Date) {
    return formatDistance(new Date(date), new Date(), {
      addSuffix: true,
    });
  }
}
