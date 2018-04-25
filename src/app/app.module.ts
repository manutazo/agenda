import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule }   from  '@angular/forms';

import { TalksModule } from './talks/talks.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    TalksModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
