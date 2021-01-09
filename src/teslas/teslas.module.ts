import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tesla, TeslaSchema } from './tesla';
import { TeslasController } from './teslas.controller';
import { TeslasService } from './teslas.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tesla.name, schema: TeslaSchema }]),
  ],
  controllers: [TeslasController],
  providers: [TeslasService],
})
export class TeslasModule {}
