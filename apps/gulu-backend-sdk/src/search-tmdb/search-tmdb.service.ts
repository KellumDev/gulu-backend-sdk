/* eslint-disable no-unused-labels */
import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { CreateSearchTmdbDto } from './dto/create-search-tmdb.dto';
import { UpdateSearchTmdbDto } from './dto/update-search-tmdb.dto';
import { HttpService } from "@nestjs/axios";
import { catchError, firstValueFrom, map, Observable, takeWhile } from 'rxjs';
import { AxiosError } from 'axios';
import { CreateTrendingTmdbDto } from '../trending-tmdb/dto/create-trending-tmdb.dto';

@Injectable()
export class SearchTmdbService {
  constructor(private http: HttpService) {}
  
  API_KEY  = process.env.API_KEY; 

  private readonly logger = new Logger(SearchTmdbService.name);
  
  async searchMedia(baseUrl: string, queryString: string) { 
    const httpString = `${baseUrl}search/multi?api_key=${this.API_KEY}&language=en-US&query=${queryString}&page=1&include_adult=false`; 
    const { data } = await firstValueFrom(
      this.http.get<CreateTrendingTmdbDto>(httpString).pipe(
        takeWhile( (response) => !!response.data ),
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );

    return data
  }

  async findDetails(baseUrl: string, queryId: number, mediaType: string) {
  const httpString = `https://api.themoviedb.org/3/${mediaType}/${queryId}?api_key=${this.API_KEY}`; 
  const { data } = await firstValueFrom(
    this.http.get<CreateTrendingTmdbDto>(httpString).pipe(
      takeWhile( response => !!response.data ),
      catchError((error: AxiosError) => {
        this.logger.error(error.response.data);
        throw 'An error happened!';
      }),
    ),
  );

  return data
  }

  findOne(id: number) {
    return `This action returns a #${id} searchTmdb`;
  }

  update(id: number, updateSearchTmdbDto: UpdateSearchTmdbDto) {
    return `This action updates a #${id} searchTmdb`;
  }

  remove(id: number) {
    return `This action removes a #${id} searchTmdb`;
  }
}
