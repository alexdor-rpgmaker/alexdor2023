import { Component, Injectable } from "@angular/core"
import { Game } from "./game"
import { GamesService } from "./games.service"

@Component({})
@Injectable({
  providedIn: 'root'
})
export class GamesComponent {
  // games: Game[] | undefined;
  //
  // constructor(
  //   private gamesService: GamesService) {
  // }
  //
  // ngOnInit(): void {
  //   this.showGames();
  // }
  //
  // showGames() {
  //   this.gamesService.getGames()
  //     .subscribe((data: Game[]) => this.games = data );
  // }
}
