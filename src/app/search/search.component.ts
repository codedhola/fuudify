import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = ""

  onSearch(event: any){
    console.log((<HTMLInputElement>event.target).value)
    this.searchValue = (<HTMLInputElement>event.target).value
  }

  @Output()
  searchedText: EventEmitter<string> = new EventEmitter<string>()

  onSearchText(){
    this.searchedText.emit(this.searchValue)
  }
}
