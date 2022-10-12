import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pair-me-desktop';
  constructor(
    @Inject('ENVIRONMENT') private environment: any
  ) {

  }
}
