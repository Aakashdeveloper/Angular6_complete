import {Component,OnChanges,Input,
        Output, EventEmitter} from '@angular/core';

@Component({
    selector:'star-app',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void{
        this.starWidth = this.rating*91/5
    }

    onStar(): void{
        this.ratingClicked.emit(`The rating clicked is ${this.rating} star`)
    }

}

/*
var a = 20;
var b = "my age is "+a
my age is 20;

`my age is ${a}`
my age is 20

function add(a,b){
    return a+b
}

var sum = add(1,2)
sum == 3
*/