import { Test, TestingModule } from '@nestjs/testing';
import { SearchTmdbController } from './search-tmdb.controller';
import { SearchTmdbService } from './search-tmdb.service';

describe('SearchTmdbController', () => {
  let controller: SearchTmdbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchTmdbController],
      providers: [SearchTmdbService],
    }).compile();

    controller = module.get<SearchTmdbController>(SearchTmdbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
