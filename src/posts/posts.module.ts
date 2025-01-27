import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, POSTS_SERVICE } from 'src/config';

@Module({
  controllers: [PostsController],
  imports: [
    ClientsModule.register([
      {
        name: POSTS_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.postsMicroserviceHost,
          port: envs.postsMicroservicePort,
        },
      },
    ]),
  ],
})
export class PostsModule {}
