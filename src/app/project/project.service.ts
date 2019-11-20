import { Injectable } from '@angular/core';
import { Project } from '@app/models/project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Project[]>('http://localhost:8000/projects');
  }

  get(id: number) {
    return this.http.get<Project>(`http://localhost:8000/projects/${id}`);
  }
}
