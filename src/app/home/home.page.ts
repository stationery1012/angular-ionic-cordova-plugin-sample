import { Component } from '@angular/core'
declare var Battery

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    document.addEventListener('deviceready', this.onDeviceReady, false)
  }
  onDeviceReady() {
    Battery.status(
      (level) => {
        alert(level) /* バッテリーの残量*/
      },
      (err) => {
        /* エラー */
      }
    )
  }
}
