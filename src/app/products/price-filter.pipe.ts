import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'PriceFilter'
})

export class PriceFilterPipe implements PipeTransform{
    showLine = true

    transform(value:number){
        console.log("from pipe>>>>>"+value)
        return value
    }
}