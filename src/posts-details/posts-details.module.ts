import { Module } from '@nestjs/common';
import { PostsDetailsService } from './posts-details.service';
import { PostsDetailsController } from './posts-details.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DETAILS_SERVICE, envs } from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: DETAILS_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.detailsMicroserviceHost,
          port: envs.detailsMicroservicePort
        }
      }
    ])
  ],
  controllers: [PostsDetailsController],
  providers: [PostsDetailsService],
})
export class PostsDetailsModule {}
