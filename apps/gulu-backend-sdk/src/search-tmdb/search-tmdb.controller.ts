import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SearchTmdbService } from './search-tmdb.service';
import { CreateSearchTmdbDto } from './dto/create-search-tmdb.dto';
import { UpdateSearchTmdbDto } from './dto/update-search-tmdb.dto';
 
@Controller('search-tmdb')
export class SearchTmdbController { 
  
  constructor(private searchTmdbService: SearchTmdbService) {}
  BASE_URL = "https://api.themoviedb.org/3/"
 
  @Get("searchtmdb/:queryString")
  searchtmdb(@Param('queryString') queryString: string): any {
    return this.searchTmdbService.searchMedia(this.BASE_URL, queryString);
  }

  @Get("getDetails/:queryId/:mediaType")
  findDetails(@Param('queryId') queryId: number, @Param('mediaType') mediaType: string) {
    /* tester for ID 343611 */
    return this.searchTmdbService.findDetails(this.BASE_URL,queryId,mediaType);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.searchTmdbService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSearchTmdbDto: UpdateSearchTmdbDto
  ) {
    return this.searchTmdbService.update(+id, updateSearchTmdbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.searchTmdbService.remove(+id);
  }
}
