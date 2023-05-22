import { Test, TestingModule } from '@nestjs/testing';
import { TrendingTmdbController } from './trending-tmdb.controller';
import { TrendingTmdbService } from './trending-tmdb.service';

describe('TrendingTmdbController', () => {
  let controller: TrendingTmdbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrendingTmdbController],
      providers: [TrendingTmdbService],
    }).compile();

    controller = module.get<TrendingTmdbController>(TrendingTmdbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
