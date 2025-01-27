import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { PostsDetailsModule } from './posts-details/posts-details.module';

@Module({
  imports: [PostsModule, PostsDetailsModule],
})
export class AppModule {}
