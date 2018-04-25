import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TalkService } from '../talk.service';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-talks',
  template: `

  <label for="search">Search</label>
  <input type="text" id="search" #search>

  <app-talk *ngFor="let talk of talks | async" [talk]="talk" (talkClicked)="log($event)"><app-talk>`,
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

	talks;

	@ViewChild('search') search: ElementRef;

  	constructor(private talkService: TalkService) { 
      
  		this.talks = this.talkService
      .getFilterTalks();

  		// Observable.from([2, 3, 4,])
  		// // .map(x => 30 * x)
  		// // .filter(x =>  x > 100)
  		// .subscribe(x => console.log(x))
  }



  ngOnInit() {
    Observable.fromEvent(this.search.nativeElement, 'keyup')
    .map((x:any) => x.target.value)
    .filter(x => x.length > 3)
    .debounceTime(500)
    .distinctUntilChanged()
    .switchMap(word => this.talkService.getFilterTalks(word))
    .subscribe(x => this.talks = x)
  }

	log(event){
  		console.log(event.title)
  	}


}
