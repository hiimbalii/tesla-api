import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { FormsModule } from './forms/forms.module';

@Module({
  imports: [
    CarsModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.tz5ao.mongodb.net/tesla?retryWrites=true&w=majority',
    ),
    FormsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
