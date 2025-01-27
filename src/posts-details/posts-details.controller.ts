import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsDetailsService } from './posts-details.service';
import { CreatePostsDetailDto } from './dto/create-posts-detail.dto';
import { UpdatePostsDetailDto } from './dto/update-posts-detail.dto';

@Controller('posts-details')
export class PostsDetailsController {
  constructor(private readonly postsDetailsService: PostsDetailsService) {}

  @Post()
  create(@Body() createPostsDetailDto: CreatePostsDetailDto) {
    return this.postsDetailsService.create(createPostsDetailDto);
  }

  @Get()
  findAll() {
    return this.postsDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostsDetailDto: UpdatePostsDetailDto) {
    return this.postsDetailsService.update(+id, updatePostsDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsDetailsService.remove(+id);
  }
}
