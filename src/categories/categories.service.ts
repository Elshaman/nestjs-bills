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

    findOne(id: Number){
        return this.categories.find(category => category.id === id);
    }

    create(payload: any){
        const newCategory = {
            id: this.categories.length + 1,
            name: payload.name
        }
        this.categories.push(newCategory);
        return newCategory;

        
    }

    update(id: Number, payload: any){
        const category = this.findOne(id);
        console.log(category)
        category.name = payload.name;
        return category
    }

    delete(id: Number){
        const index = this.categories.findIndex(category => category.id === id);
        this.categories.splice(index, 1);
        return id
    }
}
