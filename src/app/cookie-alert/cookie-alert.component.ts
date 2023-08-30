import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-alert',
  templateUrl: './cookie-alert.component.html',
  styleUrls: ['./cookie-alert.component.css']
})
export class CookieAlertComponent {


  displayNotification: boolean = false

  closeNotification(event: any){
    console.log(event.target)
    this.displayNotification = true
  }
}
