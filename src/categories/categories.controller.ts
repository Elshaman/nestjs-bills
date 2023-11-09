import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode , HttpStatus } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get()
    @HttpCode(HttpStatus.OK)
    getAll(){
        return 'traer todas las categories '
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    getSingleById(@Param('id') id: Number ){
        return `obtener ${id}`
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: any){
        return {
            message: 'create category',
            payload
        }  
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id') id: Number, @Body() payload: any){
        return {
            message: 'update category',
            payload,
            id
        }  
    }

   


}
