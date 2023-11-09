import { Injectable } from '@nestjs/common';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoriesService {

    private categories: Category[] = [{
        id: 1,
        name: "Samuel"
    }]

    findAll(){
        return this.categories;
    }

    findOne(id: number){
        return this.categories.find(category => category.id === id);
    }
}
