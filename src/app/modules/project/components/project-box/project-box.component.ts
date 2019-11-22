import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngptt-project-box',
  templateUrl: './project-box.component.html',
  styles: []
})
export class ProjectBoxComponent implements OnInit {
  @Input() project;
  @Input() classes = {};

  constructor() { }

  ngOnInit() {}

}
