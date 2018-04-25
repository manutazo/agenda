import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-new-talk',
  templateUrl: './new-talk.component.html',
  styleUrls: ['./new-talk.component.css']
})
export class NewTalkComponent implements OnInit {
	nameField: string;
	userForm: any;
	descriptionControl: FormControl;


  constructor(private fb: FormBuilder) { 
	this.descriptionControl = new FormControl('description', Validators.compose([Validators.required, this.myValidation]));

  	this.userForm = this.fb.group({
  		title: 'introduce title', 
  		description: this.descriptionControl
  	})

  	this.descriptionControl.valueChanges.subscribe(x => console.log(x))
  }

  ngOnInit() {
  	setInterval(() => this.nameField= '' + Math.random(), 5000);
  }

  myValidation(form: FormControl){
  	if (form.value != 'CodeMotion') {
  		return {'invalidConference': true}
  	}
  }

  myValidator(control: FormControl) {
 if (control.value != 'nhpatt') {
   return {invalidSpeaker: true};
 }
}

  onSubmit(){
  	console.log(this.userForm.controls.title.value)
	console.log(this.userForm.controls.description.value)
  	// console.log(form)
  }


}
