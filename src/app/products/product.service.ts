import {Injectable} from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {IProduct} from './products'; 
import {IMovies} from '../movies/movies'
import {IMusicDb}  from '../moviesDb/moviesdb';
import {Admin} from '../forms/admins'
@Injectable()

export class ProductService{

    private _productUrl = "https://ngapi4.herokuapp.com/api/getProducts";
    private _musicsUrl =  "https://ngmusicdb.herokuapp.com/api/getMusic";
    private _moviesUrl =  "https://ngmovies.herokuapp.com/api/getMovies";


    constructor(private _http:Http){};

    getProducts():Observable<IProduct[]>{
        return this._http.get(this._productUrl)
                .map((response:Response)=>  <IProduct[]> response.json())
                .catch(this.handleError);
    }

    //var add = (a,b) => a+b

    getMovies():Observable<IMovies[]>{
        return this._http.get(this._musicsUrl)
                .map((response:Response)=>  <IMovies[]> response.json()[0].artists)
                .catch(this.handleError);
    }

    getmoviesdb():Observable<IMusicDb[]>{
        return this._http.get(this._moviesUrl)
                .map((response:Response)=>  <IProduct[]> response.json())
                .catch(this.handleError);
    }
    postEmployeeForm(employee:Admin){
        let body = JSON.stringify(employee);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});

        return this._http.post('http://localhost:3100/posemployee',body,options)
                        .map(this.extractData)
                        .catch(this.handleError)
    }
    private handleError(error:Response){
        return Observable.throw(error.json().error||" server error")
    }
    private extractData(res:Response){
        let body = res.json();
        return body.fields || { }
    }
    
}


/*
function add(a,b){
    return a+b
}

var add =(a,b) => {return a+b}
*/