import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalksComponent } from '../talks/talks.component';
import { TalkComponent } from '../talk/talk.component';
import { NewTalkComponent } from '../new-talk/new-talk.component'
import { FavoriteTalkComponent } from '../favorite-talk/favorite-talk.component';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from  '@angular/forms';

import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    CoreModule,
  ],
  declarations: [
    TalksComponent,
    TalkComponent,
    NewTalkComponent,
	FavoriteTalkComponent
    ],
    entryComponents: [FavoriteTalkComponent],
  exports: [TalksComponent, TalkComponent, NewTalkComponent, FavoriteTalkComponent]
})
export class TalksModule { }
