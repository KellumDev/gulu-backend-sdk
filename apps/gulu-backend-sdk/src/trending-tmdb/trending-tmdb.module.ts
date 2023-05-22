import { Module } from '@nestjs/common';
import { TrendingTmdbService } from './trending-tmdb.service';
import { TrendingTmdbController } from './trending-tmdb.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule], 
  controllers: [TrendingTmdbController],
  providers: [TrendingTmdbService],
})
export class TrendingTmdbModule {}
