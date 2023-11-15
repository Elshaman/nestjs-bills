import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus, Put, Delete
} from "@nestjs/common";
import { InvoicesService } from '../services/invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}

  @Get()
  getAll() {
    return this.invoicesService.findAll();
  }

  @Get(':id')
  getSingleById(@Param('id') id: number) {
    return this.invoicesService.findOne(+id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: any) {
    return this.invoicesService.create(payload);
  }


  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: Number, @Body() payload: any) {
    return this.invoicesService.update(+id, payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: Number) {
    return this.invoicesService.delete(+id);
  }
}
