import { PartialType } from '@nestjs/mapped-types';
import { CreatePostsDetailDto } from './create-posts-detail.dto';

export class UpdatePostsDetailDto extends PartialType(CreatePostsDetailDto) {}
