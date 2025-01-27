import { Injectable } from '@nestjs/common';
import { CreatePostsDetailDto } from './dto/create-posts-detail.dto';
import { UpdatePostsDetailDto } from './dto/update-posts-detail.dto';

@Injectable()
export class PostsDetailsService {
  create(createPostsDetailDto: CreatePostsDetailDto) {
    return 'This action adds a new postsDetail';
  }

  findAll() {
    return `This action returns all postsDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postsDetail`;
  }

  update(id: number, updatePostsDetailDto: UpdatePostsDetailDto) {
    return `This action updates a #${id} postsDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} postsDetail`;
  }
}
