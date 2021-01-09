import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class KeyValuePair {
  @Prop()
  key: string;

  @Prop()
  value: string;
}
export class Color {
  @Prop()
  name: string;
  @Prop()
  hex: string;
}
export class Option {
  @Prop()
  name: string;
  @Prop()
  multipleChoices: boolean;

  @Prop()
  options: KeyValuePair;
}

@Schema()
export class Form {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  autoUrl: string;
  @Prop()
  colors: Color[];
  @Prop()
  options: Option[];
}

export type FormDocument = Form & Document;
export const FormSchema = SchemaFactory.createForClass(Form);
