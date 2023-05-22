import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrendingTmdbService } from './trending-tmdb.service';
import { CreateTrendingTmdbDto } from './dto/create-trending-tmdb.dto';
import { UpdateTrendingTmdbDto } from './dto/update-trending-tmdb.dto';

@Controller('trending-tmdb')
export class TrendingTmdbController {
  constructor(private readonly trendingTmdbService: TrendingTmdbService) {}

  @Get("trendingtmdb/tv")
  searchtmdbTvShows()  {
    return this.trendingTmdbService.getTrendingTvShows();
  }
  
  @Get("trendingtmdb/movies")
  searchtmdbTrendingMovies()  {
    return this.trendingTmdbService.getTrendingMmovies();
  }


  @Post()
  create(@Body() createTrendingTmdbDto: CreateTrendingTmdbDto) {
    return this.trendingTmdbService.create(createTrendingTmdbDto);
  }

  @Get()
  findAll() {
    return this.trendingTmdbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trendingTmdbService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrendingTmdbDto: UpdateTrendingTmdbDto
  ) {
    return this.trendingTmdbService.update(+id, updateTrendingTmdbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trendingTmdbService.remove(+id);
  }
}
