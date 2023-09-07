import { Component, EventEmitter, Input, Output } from '@angular/core';

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


  selectedRadioBtn: string = "food"

  @Output()
  filterChosenFood: EventEmitter<string> = new EventEmitter<string>();


  onChosenFood(){
    this.filterChosenFood.emit(this.selectedRadioBtn)
    // console.log(this.selectedRadioBtn)
  }
}
