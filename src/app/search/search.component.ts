import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = "Burger"

  onSearch(event: any){
    console.log((<HTMLInputElement>event.target).value)
    this.searchValue = (<HTMLInputElement>event.target).value
  }

}
