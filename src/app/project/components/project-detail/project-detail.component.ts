import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Project } from '@app/models';

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
    private route: ActivatedRoute
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
