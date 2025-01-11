import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [ApiService],
  controllers: [ApiController]
})
export class ApiModule {}
