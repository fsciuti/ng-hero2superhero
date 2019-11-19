import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngptt-project-detail',
  templateUrl: './project-detail.component.html',
  styles: []
})
export class ProjectDetailComponent implements OnInit {
  @Input() project;

  constructor() { }

  ngOnInit() {
  }

}
