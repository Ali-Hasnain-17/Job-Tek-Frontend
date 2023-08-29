export interface Job {
  id: string;
  title: string;
  description: string;
  companyName: string;
  type: string;
  applyUrl: string;
  experienceLevel: number;
  applicants: number;
  city: string;
  country: string;
  postedAt: Date;
}
