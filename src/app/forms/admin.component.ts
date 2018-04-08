import {Component} from '@angular/core';
import {Admin} from './admins';
import {NgForm} from '@angular/forms';
import {ProductService} from '../products/product.service'

@Component({
    templateUrl:'./admin.component.html' 
})

export class FormsComponent{
    languages=["Action Adventure Fantasy","Action Crime Thriller","Biography Drama","Comedy Romance"];
    model = new Admin("","",0,"","");
    hastypeError=false;
    

    moviesToUpper(value:string){
        if(value.length>0)
            this.model.movies = value.charAt(0).toUpperCase() + value.slice(1);
        else
            this.model.movies=value
    }

    validateType(event){
        if(this.model.type === "default")
            this.hastypeError=true;
        else
            this.hastypeError=false
    }

    constructor(private _formPoster:ProductService){}

    submitForm(form:NgForm){
        this._formPoster.postEmployeeForm(this.model)
            .subscribe(
                (data)=> console.log('success', data),
                (err) => console.log('error:', err)
            )
    }

    
   
}
