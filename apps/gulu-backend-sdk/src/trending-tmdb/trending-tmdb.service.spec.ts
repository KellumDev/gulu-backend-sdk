import { Test, TestingModule } from '@nestjs/testing';
import { TrendingTmdbService } from './trending-tmdb.service';

describe('TrendingTmdbService', () => {
  let service: TrendingTmdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrendingTmdbService],
    }).compile();

    service = module.get<TrendingTmdbService>(TrendingTmdbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
