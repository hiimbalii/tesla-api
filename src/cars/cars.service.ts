import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from './car';
import { CreateCarDTO } from './dto/createCarDto';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  async getAllCars(): Promise<Car[]> {
    return this.carModel.find().exec();
  }
  async addNewCar(car: CreateCarDTO): Promise<Car> {
    const createdCar = new this.carModel(car);
    return createdCar.save();
  }
  async getCarByUrl(url: string) {
    return this.carModel.findOne({ url }).exec();
  }
  async deleteCar(id: string) {
    return this.carModel.findByIdAndDelete(id).exec();
  }
  async findCarById(id: string) {
    return this.carModel.findById(id).exec();
  }
}
