import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/createCarDto';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  async getAllCars() {
    return await this.carsService.getAllCars();
  }

  @Post()
  async addNewCar(@Body() car: CreateCarDTO) {
    return await this.carsService.addNewCar(car);
  }
}
