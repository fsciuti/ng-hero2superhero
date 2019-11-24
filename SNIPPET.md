## mock data
```
{
    id: 1,
    code: 'NHusYJl',
    name: 'Progetto Alpha',
    description: 'Lorem ipsum dolor sit amet.',
    start: new Date(2019, 1, 31),
    end: new Date(2019, 3, 15),
    priority: 'medium',
    done: true,
    tasks: []
},
{
    id: 2,
    code: 'SJieYKl',
    name: 'Progetto Beta',
    description: 'Lorem ipsum dolor sit amet.',
    start: new Date(2019, 3, 31),
    end: new Date(2019, 6, 15),
    priority: 'low',
    done: true,
    tasks: []
},
{
    id: 3,
    code: 'POjeGBs',
    name: 'Progetto Gamma',
    description: 'Lorem ipsum dolor sit amet.',
    start: new Date(2019, 8, 15),
    priority: 'low',
    done: false,
    tasks: []
},
```

```
{
    'id': 1,
    'name': 'Task di Prova',
    'start': new Date(2018, 2, 8),
    'duration': 10,
    'isBillable': true
},
{
    'id': 2,
    'name': 'Task di Prova 2',
    'start': new Date(2018, 2, 15),
    'duration': 10,
    'isBillable': true
}
```

## step-1-setup
#### app.component.html

```
<nav class="navbar navbar-expand-md navbar-dark bg-primary">
  <a class="navbar-brand" href="#">NG Project Tracking Tool</a>
  <div>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Progetti</a>
      </li>
    </ul>
  </div>
</nav>
```

## step-2-firstcomponent
#### project-list.component.html

```
<div class="card-columns">
    <div *ngFor="let project of projects">
        <div class="card" [ngClass]="{'border-info': project.done, 'border-warning': !project.done }">
            <div class="card-body">
                <h5 class="card-title"><span class="badge badge-light float-right">{{ project.code }}</span>
                    {{ project.name }}</h5>
                <a href="#" class="btn btn-primary btn-sm" (click)="selectProject(project)">Vai al Progetto</a>
            </div>
        </div>
    </div>
</div>
<div class="jumbotron">
    <h1 class="display-4">{{project.name}}</h1>
    <p class="lead">{{project.description}}</p>
    <hr class="my-4">
    <p>
        <span>Codice: {{project.code}} - Data Inizio: {{project.start | date:'dd/MM/yyyy'}}</span>
        <span *ngIf="project.end">- Data Fine: {{project.end | date:'dd/MM/yyyy'}}</span>
    </p>
</div>
```
