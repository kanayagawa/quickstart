import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `
      <form>
        <label for="show">表示/非表示：</label>
        <input id="show" name="show" type="checkbox" 
          [(ngModel)]="show"/>
      </form>
      <div *ngIf="show">
        <p>　21日21時22分頃、北海道で最大震度6弱の地震がありました。

          　震源は胆振地方中東部、震源の深さはおよそ30km、地震の規模を示すマグニチュードは5.7と推定されます。

          　この地震で厚真町では最大震度6弱を、安平町、むかわ町で震度5強、札幌市や千歳市で震度5弱を観測しました。</p>
      </div>
    `
}
  )

export class AppComponent {
  show = false;
}


