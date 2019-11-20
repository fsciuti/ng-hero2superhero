import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap, filter, map } from 'rxjs/operators';

import { ProjectService } from '@app/project/project.service';
import { Project } from '@app/models/project.model';

@Component({
  selector: 'ngptt-project-detail',
  templateUrl: './project-detail.component.html',
  styles: []
})
export class ProjectDetailComponent implements OnInit {
  @Input() project;
  @Output() highlight = new EventEmitter();

  project$: Observable<Project>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.project$ = this.route.data.pipe(
      map(data => data.project)
    )
  }

  onHighlight() {
    this.highlight.emit(this.project);
  }

}
