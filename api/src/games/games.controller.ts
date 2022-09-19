import { Controller, Get } from '@nestjs/common';
import { GamesService } from './games.service';
import { Game } from "./game.entity"

@Controller()
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get('/jeux')
  getGames(): Promise<Game[]> {
    return this.gamesService.findAll();
  }
}
