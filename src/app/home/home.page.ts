import { Component } from '@angular/core'
declare var MyPlugin

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
    MyPlugin.status(
      (level) => {
        alert(level) /* pluginからの戻り値 */
      },
      (err) => {
        alert(err) /* エラー */
      },
      ['HELLO!!!!!!!!!!!!!!!!']
    )
  }
}
