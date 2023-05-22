import { PartialType } from '@nestjs/mapped-types';
import { CreateTrendingTmdbDto } from './create-trending-tmdb.dto';

export class UpdateTrendingTmdbDto extends PartialType(CreateTrendingTmdbDto) {}
