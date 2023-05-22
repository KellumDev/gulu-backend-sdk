import { Module } from '@nestjs/common';
import { SearchTmdbService } from './search-tmdb.service';
import { SearchTmdbController } from './search-tmdb.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ HttpModule.register({
    responseType: 'json'
  })], 
  controllers: [SearchTmdbController],
  providers: [SearchTmdbService],
})
export class SearchTmdbModule {}
