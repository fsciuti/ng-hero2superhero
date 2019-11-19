import { Component, OnInit } from '@angular/core';
import { Project } from '@app/models/project.model';

@Component({
  selector: 'ngptt-project-container',
  templateUrl: './project-container.component.html',
  styles: []
})
export class ProjectContainerComponent implements OnInit {
  selectedProject: Project;

  constructor() { }

  ngOnInit() {
  }

  onSelectedProject(project: Project) {
    this.selectedProject = project;
  }

  onHighlightProject(project: Project) {
    console.log('highlight', project);
  }

}
