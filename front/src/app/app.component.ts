import { Component } from '@angular/core';
import { Game } from "./games/game"
import { GamesService } from "./games/games.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Alex d'or 2023";
  games: Game[] | undefined;

  constructor(
    private gamesService: GamesService) {
  }

  ngOnInit(): void {
    this.showGames();
  }

  showGames() {
    this.gamesService.getGames()
      .subscribe((data: Game[]) => this.games = data );
  }
}
