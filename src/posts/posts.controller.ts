import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  ParseIntPipe,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ClientProxy } from '@nestjs/microservices';
import { POSTS_SERVICE } from 'src/config';

@Controller('posts')
export class PostsController {
  constructor(
    @Inject(POSTS_SERVICE) private readonly postsClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsClient.send({ cmd: 'createPost' }, createPostDto);
  }

  @Get()
  findAll() {
    return this.postsClient.send({ cmd: 'findAllPosts' }, {});
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postsClient.send({ cmd: 'findOnePost' }, { id });
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postsClient.send(
      { cmd: 'updatePost' },
      { ...updatePostDto, id },
    );
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.postsClient.send({ cmd: 'removePost' }, { id });
  }
}
