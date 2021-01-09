import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Car } from 'src/cars/car';
import { Color, KeyValuePair } from 'src/forms/form';
import { Document } from 'mongoose';

@Schema()
export class Tesla {
  @Prop()
  owner: string;
  @Prop()
  values: KeyValuePair[];
  @Prop()
  color: Color;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Car' })
  car: Car;
}
export type TeslaDocument = Tesla & Document;
export const TeslaSchema = SchemaFactory.createForClass(Tesla);
