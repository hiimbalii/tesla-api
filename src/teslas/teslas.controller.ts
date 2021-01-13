import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { NewTeslaDTO } from './dto/newTeslaDto';
import { TeslasService } from './teslas.service';

@Controller('teslas')
export class TeslasController {
  constructor(private teslaService: TeslasService) {}
  @Get('/:id')
  async getTesla(@Param('id') id: string) {
    const tesla = await this.teslaService.getTesla(id);
    if (tesla) return tesla;
    throw new NotFoundException();
  }

  @Post()
  async addTesla(@Body() newTeslaDto: NewTeslaDTO) {
    console.log(newTeslaDto.values);
    console.log(newTeslaDto.values[0].value);
    return await this.teslaService.addNewTesla(newTeslaDto);
  }
}
