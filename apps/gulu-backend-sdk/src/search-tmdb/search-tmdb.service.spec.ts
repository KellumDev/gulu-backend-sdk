import { Test, TestingModule } from '@nestjs/testing';
import { SearchTmdbService } from './search-tmdb.service';

describe('SearchTmdbService', () => {
  let service: SearchTmdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchTmdbService],
    }).compile();

    service = module.get<SearchTmdbService>(SearchTmdbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
