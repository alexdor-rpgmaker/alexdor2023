import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from "./game"

@Injectable()
export class GamesService {
  gamesUrl = 'http://localhost:3000/jeux';

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<Game[]>(this.gamesUrl);
  }
}
