import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Form {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  autoUrl: string;
  @Prop()
  colors: IColor[];
  @Prop()
  options: IOption[];
}

export type FormDocument = Form & Document;
export const FormSchema = SchemaFactory.createForClass(Form);

export interface IColor {
  name: string;
  hex: string;
}
export interface IOption {
  name: string;
  multipleChoices: boolean;
  options: IKeyValuePair;
}
export interface IKeyValuePair {
  key: string;
  value: string;
}
