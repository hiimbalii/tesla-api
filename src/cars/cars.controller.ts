import {
  BadGatewayException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/createCarDto';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  async getAllCars() {
    const cars = await this.carsService.getAllCars();
    if (cars) return cars;
    throw new NotFoundException();
  }

  @Get('/:url')
  async getCarByUrl(@Param('url') url: string) {
    const car = await this.carsService.getCarByUrl(url);
    if (car) return car;
    throw new NotFoundException();
  }

  @Get('/id/:id')
  async getCarById(@Param('id') id: string) {
    const car = await this.carsService.findCarById(id);
    if (car) return car;
    throw new NotFoundException();
  }

  @Post()
  async addNewCar(@Body() car: CreateCarDTO) {
    return await this.carsService.addNewCar(car);
  }

  @Delete('/:id')
  async deleteCar(@Param('id') id: string) {
    const car = await this.carsService.findCarById(id);
    if (car) return await this.carsService.deleteCar(id);
    throw new NotFoundException();
  }

  @Get('/:url/convert')
  async convertUrlToId(@Param('url') url) {
    const car = await this.carsService.getCarByUrl(url);
    if (car && car.id) return car.id;
    if (car) throw new BadGatewayException();
    throw new NotFoundException();
  }
}
