import {Component, OnInit} from '@angular/core';
import {IMusicDb} from './moviesdb'
import {ProductService} from '../products/product.service';

@Component({
    templateUrl:'./moviesDb.component.html'
})

export class MusicDbComp implements OnInit{

    moviesdb:IMusicDb[];

    constructor(private _productService: ProductService){

    }
    ngOnInit():void{
        this._productService.getmoviesdb()
            .subscribe(data =>{ this.moviesdb = data});
    }
}