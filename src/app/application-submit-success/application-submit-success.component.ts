import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-submit-success',
  templateUrl: './application-submit-success.component.html',
  styleUrls: ['./application-submit-success.component.css'],
})
export class ApplicationSubmitSuccessComponent {
  constructor(public router: Router) {}
}
