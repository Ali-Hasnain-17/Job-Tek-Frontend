export interface Job {
  id?: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  companyName: string;
  type: string;
  mode: string;
  experience: string;
  applicants?: number;
  location: string;
  postedAt?: Date;
}
