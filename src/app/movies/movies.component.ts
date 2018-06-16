import {Component, OnInit} from '@angular/core';
import {IMovies} from './movies'
import {ProductService} from '../products/product.service';

@Component({
    templateUrl:'./movies.compnent.html',
    styleUrls:['./movies.component.css']
})

export class MusicComp implements OnInit{
    musicdb:IMovies[];

    constructor(private _productService: ProductService){

    }
    ngOnInit():void{
        this._productService.getMovies()
            .subscribe(data =>{ this.musicdb = data; console.log('data',this.musicdb[0].albums[0].price)});
    }
}