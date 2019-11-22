import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngptt-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {
  @Input() classes = {};

  constructor() { }

  ngOnInit() {
  }
}
