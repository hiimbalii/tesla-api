import { Color, KeyValuePair } from 'src/forms/form';
import { KeyValueExtra } from '../tesla';

export class NewTeslaDTO {
  owner: string;
  color: Color;
  values: KeyValueExtra[];
  car: string;
}
