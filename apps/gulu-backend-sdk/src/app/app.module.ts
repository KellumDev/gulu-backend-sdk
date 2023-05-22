import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';


import { SearchTmdbController } from '../search-tmdb/search-tmdb.controller';
import { SearchTmdbService } from '../search-tmdb/search-tmdb.service';
import { HttpModule } from '@nestjs/axios';
import { TrendingTmdbController } from '../trending-tmdb/trending-tmdb.controller';
import { TrendingTmdbService } from '../trending-tmdb/trending-tmdb.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, SearchTmdbController, TrendingTmdbController],
  providers: [AppService, SearchTmdbService, TrendingTmdbService],
})
export class AppModule {}
