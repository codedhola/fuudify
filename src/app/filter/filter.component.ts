import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() all: number = 10;
  @Input() food: number = 6;
  @Input() pizza: number = 2;
  @Input() drinks: number = 0;
  @Input() others: number = 2;
}
