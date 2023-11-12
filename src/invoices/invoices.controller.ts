import { Controller, Get , Param, Post, Body, HttpCode , HttpStatus} from '@nestjs/common';
import { InvoicesService } from './invoices.service';


@Controller('invoices')
export class InvoicesController {

    constructor(private invoicesService: InvoicesService){}

    @Get()
    getAll(){
        return 'traer todas las invoices '
    }

    @Get(':id')
    getSingleById(@Param('id') id: Number ){
        return `obtener ${id}`
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: any){
        return this.invoicesService.create(payload)
    }

    

}
