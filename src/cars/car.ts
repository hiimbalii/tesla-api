import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Car {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  basePrice: number;

  @Prop({ required: true })
  url: string;
}

export type CarDocument = Car & Document;
export const CarSchema = SchemaFactory.createForClass(Car);
