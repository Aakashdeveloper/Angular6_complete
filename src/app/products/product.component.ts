import {Component, OnInit} from '@angular/core';
import {IProduct} from './products';
import {ProductService} from './product.service';

@Component({
    templateUrl:'./product.component.html',
    //styles:['thead{color:green}','h3{color:blue}']
    styleUrls:['./product.component.css']
})

export class ProductComp implements OnInit{
    title:string="****************Product List***************";
    showImage=false;
    filterProduct;
    imgWidth=50;
    products:IProduct[];

    constructor(private _productService: ProductService){

    }

    toggleImage():void{
        this.showImage = !this.showImage
    }

    ngOnInit():void{
        this._productService.getProducts()
            .subscribe((data) => this.products = data);
    }
    onRatingClicked(message:string){
        this.title = "Product list>>>>"+message
    }
}

/*
a coding apttern in which a class receives the instance of object which it need 
from extrenal source rather than creating it
*/