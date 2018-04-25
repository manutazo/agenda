import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-talk',
  template: `
  arriba
  <ng-content select="[description]"></ng-content>
  <ng-content select="[icono]"></ng-content>
  abajo
  `,
  styleUrls: ['./favorite-talk.component.css']
})
export class FavoriteTalkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
