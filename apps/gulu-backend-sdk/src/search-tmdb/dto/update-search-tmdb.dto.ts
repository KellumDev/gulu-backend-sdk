import { PartialType } from '@nestjs/mapped-types';
import { CreateSearchTmdbDto } from './create-search-tmdb.dto';

export class UpdateSearchTmdbDto extends PartialType(CreateSearchTmdbDto) {}
