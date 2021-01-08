import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Form, FormSchema } from './form';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Form.name, schema: FormSchema }]),
  ],
  controllers: [FormsController],
  providers: [FormsService],
})
export class FormsModule {}
