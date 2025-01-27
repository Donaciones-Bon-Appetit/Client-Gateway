import { Test, TestingModule } from '@nestjs/testing';
import { PostsDetailsController } from './posts-details.controller';
import { PostsDetailsService } from './posts-details.service';

describe('PostsDetailsController', () => {
  let controller: PostsDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsDetailsController],
      providers: [PostsDetailsService],
    }).compile();

    controller = module.get<PostsDetailsController>(PostsDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
