import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { TabComponent } from './../tab/tab.component';

@Component({
  selector: 'ngptt-tabs',
  template: `
    <ul class="nav nav-tabs">
      <li class="m-3" *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.text-info]="tab.active">
        <a>{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  
  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab)=>tab.active);
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  
  selectTab(tab: TabComponent){
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
  }
}
