import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Job } from '../types/Job';
import { JobService } from '../services/job.service';
import { formatDistance } from 'date-fns';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit, AfterViewInit {
  jobId!: string;
  job!: Job;

  @ViewChild('detailedDescription')
  detailedDescriptionContainer!: ElementRef<HTMLDivElement>;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public authService: AuthService,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => (this.jobId = params.get('id')!)
    );
    this.jobService.getJobById(this.jobId).subscribe((job) => {
      this.job = job;
    });
  }

  ngAfterViewInit(): void {
    this.detailedDescriptionContainer.nativeElement.insertAdjacentHTML(
      'afterbegin',
      this.job.detailedDescription
    );
  }

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
