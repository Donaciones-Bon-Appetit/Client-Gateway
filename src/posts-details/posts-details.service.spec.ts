import { Test, TestingModule } from '@nestjs/testing';
import { PostsDetailsService } from './posts-details.service';

describe('PostsDetailsService', () => {
  let service: PostsDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsDetailsService],
    }).compile();

    service = module.get<PostsDetailsService>(PostsDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
