import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewTeslaDTO } from './dto/newTeslaDto';
import { Tesla, TeslaDocument } from './tesla';

@Injectable()
export class TeslasService {
  constructor(
    @InjectModel(Tesla.name) private teslaModel: Model<TeslaDocument>,
  ) {}
  async addNewTesla(newTeslaDTO: NewTeslaDTO) {
    const tesla = new this.teslaModel(newTeslaDTO);
    return tesla.save();
  }
  async getTesla(id: string) {
    return this.teslaModel.findById(id).exec();
  }
}
