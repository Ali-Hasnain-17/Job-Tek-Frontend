import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-job-filters',
  templateUrl: './job-filters.component.html',
  styleUrls: ['./job-filters.component.css'],
})
export class JobFiltersComponent {
  @Output() onFilterApply = new EventEmitter<{
    mode: string;
    type: string;
    applicants: string;
    experience: string;
    filterCount: number;
  }>();

  @ViewChild('mode') modeSelect!: ElementRef<HTMLSelectElement>;
  @ViewChild('type') typeSelect!: ElementRef<HTMLSelectElement>;
  @ViewChild('applicants') applicants!: ElementRef<HTMLSelectElement>;
  @ViewChild('experience') experienceSelect!: ElementRef<HTMLSelectElement>;

  applyFilters() {
    const filters = {
      mode: this.modeSelect.nativeElement.value,
      type: this.typeSelect.nativeElement.value,
      applicants: this.applicants.nativeElement.value,
      experience: this.experienceSelect.nativeElement.value,
    };
    const filterCount = this.getFilterCount(filters);
    this.onFilterApply.emit({ ...filters, filterCount });
  }

  getFilterCount(filters: any) {
    let count = 0;
    for (let key in filters) {
      if (filters[key] !== '') {
        count++;
      }
    }
    return count;
  }
}
