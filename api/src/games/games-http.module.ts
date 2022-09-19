import { Module } from '@nestjs/common';
import { GamesModule } from './games.module';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';

@Module({
  imports: [GamesModule],
  providers: [GamesService],
  controllers: [GamesController]
})
export class GameHttpModule {}
