import { Component, OnInit, Output, EventEmitter, Input, ViewChild, TemplateRef, AfterViewInit, ElementRef } from '@angular/core';

import { Project } from '@app/models';

@Component({
  selector: 'ngptt-project-list',
  templateUrl: './project-list.component.html',
  styles: []
})
export class ProjectListComponent implements OnInit, AfterViewInit {
  @Input() projects: Project[] = [];
  @Output() selected = new EventEmitter<Project>();
  @ViewChild('tplSingleProject', { static: false /*, read: ElementRef */ }) tplSingleProject: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.tplSingleProject);
  }
  

  selectProject(project: Project) {
    this.selected.emit(project);
  }
}
