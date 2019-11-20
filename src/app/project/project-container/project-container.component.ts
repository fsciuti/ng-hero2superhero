import { Component, OnInit } from '@angular/core';
import { Project } from '@app/models/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngptt-project-container',
  templateUrl: './project-container.component.html',
  styles: []
})
export class ProjectContainerComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAll().subscribe((data) => this.projects = data);
    this.projectService.get(1).subscribe((data) => console.log(data));
  }

  onSelectedProject(project: Project) {
    this.selectedProject = project;
  }

  onHighlightProject(project: Project) {
    console.log('highlight', project);
  }

}
