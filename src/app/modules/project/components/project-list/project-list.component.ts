import { Component, OnInit, Output, EventEmitter, Input, ViewChild, TemplateRef, AfterViewInit, ElementRef } from '@angular/core';

import { Project } from '@app/models';

@Component({
  selector: 'ngptt-project-list',
  templateUrl: './project-list.component.html',
  styles: []
})
export class ProjectListComponent implements OnInit {
  @Input() projects: Project[] = [];
  @Input()  tplSingleProject: TemplateRef<any>;
  constructor() { }

  ngOnInit() {}
}
