import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Project } from '@app/models/project.model';

@Component({
  selector: 'ngptt-project-list',
  templateUrl: './project-list.component.html',
  styles: []
})
export class ProjectListComponent implements OnInit {
  @Input() projects: Project[] = [];
  @Output() selected = new EventEmitter<Project>();

  constructor() { }

  ngOnInit() {
  }

  selectProject(project: Project) {
    this.selected.emit(project);
  }
}
