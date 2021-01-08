import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Car } from 'src/cars/car';
import { IKeyValuePair } from 'src/forms/form';

@Schema()
export class Tesla {
  @Prop()
  owner: string;
  @Prop()
  values: IKeyValuePair[];
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Car' })
  car: Car;
}
