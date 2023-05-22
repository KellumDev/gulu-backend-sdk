/* eslint-disable no-unused-labels */
import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, delay, firstValueFrom, map, switchMap, takeWhile, tap } from 'rxjs';
import { CreateTrendingTmdbDto } from './dto/create-trending-tmdb.dto';
import { UpdateTrendingTmdbDto } from './dto/update-trending-tmdb.dto';

@Injectable()
export class TrendingTmdbService { 
  constructor(private http: HttpService) {}
  
  API_KEY  = process.env.API_KEY; 
  httpStringMovies = `https://api.themoviedb.org/3/trending/tv/day?api_key=${this.API_KEY}`; 
  httpStringTv = `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.API_KEY}`; 
  
  private readonly logger = new Logger(TrendingTmdbService.name);
   
  async getTrendingTvShows() { 
    const { data } = await firstValueFrom(
      this.http.get<CreateTrendingTmdbDto>(this.httpStringTv).pipe(
        takeWhile( (response) => !!response.data ),
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );

    return data
  }
 
  async getTrendingMmovies() { 
    const { data } = await firstValueFrom(
      this.http.get<CreateTrendingTmdbDto>(this.httpStringMovies).pipe(

        takeWhile( response => !!response.data ),
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );

    return data
  }


  create(createTrendingTmdbDto: CreateTrendingTmdbDto) {
    return 'This action adds a new trendingTmdb';
  }

  findAll() {
    return `This action returns all trendingTmdb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trendingTmdb`;
  }

  update(id: number, updateTrendingTmdbDto: UpdateTrendingTmdbDto) {
    return `This action updates a #${id} trendingTmdb`;
  }

  remove(id: number) {
    return `This action removes a #${id} trendingTmdb`;
  }
}
