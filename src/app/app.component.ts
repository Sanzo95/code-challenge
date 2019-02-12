import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listGiornate(): number[] {
    const list: number[] = [];
    for (let i = 1; i < 39; i++) {
      list[i - 1] = i;
    }
    return list;
  }
}
