import { Component, Input, EventEmitter, Output,  OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FavoriteTalkComponent } from '../favorite-talk/favorite-talk.component';

@Component({
  selector: 'app-talk',
  template: `<p [ngStyle]="style" (click)="clickOn(talk)">{{talk?.title}}</p> 

  <div #favorite></div>
  `,
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {


  constructor(private factory: ComponentFactoryResolver) { }

  ngOnInit() {
  	this.favorite.createComponent(this.factory.resolveComponentFactory(FavoriteTalkComponent))
  }

	@Input() talk;

	@Output() talkClicked: EventEmitter<any> = new EventEmitter();

	@ViewChild('favorite', {read:  ViewContainerRef}) favorite: ViewContainerRef;

	clickOn(){
		this.talkClicked.emit(this.talk)
	}

	style = {"padding": "10px","background-color": "lightgrey"}


}
