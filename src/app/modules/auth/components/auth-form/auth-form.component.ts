import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngptt-auth-form',
  templateUrl: './auth-form.component.html',
  styles: []
})
export class AuthFormComponent implements OnInit {
  @Input() buttonLabel = 'Submit';
  @Output() submitted: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  constructor() { }

  ngOnInit() {
  }

  submit(f) {
    this.submitted.emit(f);
  }

}
