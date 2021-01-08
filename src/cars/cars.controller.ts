import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/createCarDto';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  async getAllCars() {
    return await this.carsService.getAllCars();
  }

  @Get('/:url')
  async getCarByUrl(@Param('url') url: string) {
    return await this.carsService.getCarByUrl(url);
  }

  @Post()
  async addNewCar(@Body() car: CreateCarDTO) {
    return await this.carsService.addNewCar(car);
  }

  @Delete('/:id')
  async deleteCar(@Param('id') id: string) {
    return await this.carsService.deleteCar(id);
  }
}
