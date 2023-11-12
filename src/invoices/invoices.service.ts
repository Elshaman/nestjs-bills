import { Injectable } from '@nestjs/common';
import { Invoice } from 'src/entities/invoice.entity';

@Injectable()
export class InvoicesService {

    private invoices: Invoice[] = [{
        id: 1,
        category_id: 1,
        description: "juguete",
        value: 30000,
        type: 1,
        date: new Date()
    }]

    findAll(){
        return this.invoices;
    }

    findOne(id: Number){
        return this.invoices.find(invoice => invoice.id === id);
    }

    create(payload: any){
        const newInvoice = {
            id: this.invoices.length + 1,
            ...payload
        }
        this.invoices.push(newInvoice);
        return newInvoice;
    }

    update(id:number , payload:any){
        const invoice = this.findOne(id)
        if(invoice){
            const index = this.invoices.findIndex((item) => item.id === id)
            this.invoices[index] = {
              ...invoice,
              ...payload
            }
            return this.invoices[index]
        }else{
            return null
        }
    }

    delete(id: number){
        const index = this.invoices.findIndex( invoice => invoice.id === id);
        this.invoices.splice(index, 1);
        return id
    }

}
