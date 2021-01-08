import { Module } from '@nestjs/common';
import { TeslasController } from './teslas.controller';
import { TeslasService } from './teslas.service';

@Module({
  controllers: [TeslasController],
  providers: [TeslasService],
})
export class TeslasModule {}
