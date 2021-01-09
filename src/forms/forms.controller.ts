import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateFormDTO } from './dto/createFormDto';
import { FormsService } from './forms.service';

@Controller('forms')
export class FormsController {
  constructor(private formService: FormsService) {}

  @Get('/:url')
  async getFormForCar(@Param('url') url: string) {
    const form = await this.formService.getFormForCar(url);
    if (form) return form;
    throw new NotFoundException();
  }

  @Delete('/:id')
  async deleteForm(@Param('id') id: string) {
    const form = this.formService.getFormById(id);
    if (form) return await this.formService.deleteForm(id);
    throw new NotFoundException();
  }

  @Post()
  async addNewForm(@Body() newFormDto: CreateFormDTO) {
    return await this.formService.createFrom(newFormDto);
  }
}
