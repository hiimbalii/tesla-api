import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Car } from 'src/cars/car';
import { KeyValuePair } from 'src/forms/form';

@Schema()
export class Tesla {
  @Prop()
  owner: string;
  @Prop()
  values: KeyValuePair[];
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Car' })
  car: Car;
}
