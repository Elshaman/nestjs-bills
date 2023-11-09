import { Controller, Get , Param } from '@nestjs/common';

@Controller('invoices')
export class InvoicesController {

    @Get()
    getAll(){
        return 'traer todas las invoices '
    }

    @Get(':id')
    getSingleById(@Param('id') id: Number ){
        return `obtener ${id}`
    }

    

}
