import { Component, Output } from '@angular/core';
import { Match } from './models/match';
import { MatchService } from './match.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  selectedid: number;

  constructor(private matchService: MatchService ) {}



  listGiornate(): number[] {
    const list: number[] = [];
    for (let i = 1; i < 39; i++) {
      list[i - 1] = i;
    }
    return list;
  }


  dayWasSelected( id: number) {
    this.selectedid=id;

  }

}
