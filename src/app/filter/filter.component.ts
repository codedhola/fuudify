import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input("all") allFood: number = 10;
  @Input("food") foodOnly: number = 6;
  @Input("drinks") pizzaOnly: number = 2;
  @Input("pizza") drinksOnly: number = 0;
  @Input() others: number = 2;
}
