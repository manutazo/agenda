import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-new-talk></app-new-talk>
  <app-talks></app-talks>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
