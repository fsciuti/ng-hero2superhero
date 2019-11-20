import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngptt-project-detail',
  templateUrl: './project-detail.component.html',
  styles: []
})
export class ProjectDetailComponent implements OnInit {
  @Input() project;
  @Output() highlight = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onHighlight() {
    this.highlight.emit(this.project);
  }

}
