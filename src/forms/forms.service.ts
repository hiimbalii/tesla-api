import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFormDTO } from './dto/createFormDto';
import { SubmitFormDTO } from './dto/submitFormDTO';
import { Form, FormDocument } from './form';

@Injectable()
export class FormsService {
  constructor(@InjectModel(Form.name) private formModel: Model<FormDocument>) {}

  async getFormForCar(url: string) {
    return this.formModel.findOne({ autoUrl: url }).exec();
  }

  async createFrom(createFormDTO: CreateFormDTO) {
    const newForm = new this.formModel(createFormDTO);
    return newForm.save();
  }
  async deleteForm(id: string) {
    return await this.formModel.findByIdAndDelete(id).exec();
  }
}
