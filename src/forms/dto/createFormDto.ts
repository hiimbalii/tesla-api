import { Color, Option } from '../form';

export class CreateFormDTO {
  name: string;
  description: string;
  autoUrl: string;
  colors: Color[];
  options: Option[];
}
