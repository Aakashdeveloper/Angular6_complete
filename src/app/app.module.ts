import {NgModule} from '@angular/core';
import { BrowserModule  } from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {CarComponent} from './car.component';
import {ProductComp} from './products/product.component';
import { StarComponent } from './shared/star.component';
import { productFilter } from './products/product-filter.pipe';
import {PriceFilterPipe} from './products/price-filter.pipe';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { NotFound } from './shared/notFound.component';
import { ProductDetail } from './products/product-detail.component';
import { OrderComponent } from './orders/order.component';
import { MusicComp } from './movies/movies.component';
import { MusicDbComp } from './moviesDb/moviesDb.component';
import { FormsComponent } from './forms/admin.component';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
        RouterModule.forRoot([
            {path:'products',component:ProductComp},
            {path:'products/:id',component:ProductDetail},
            {path:'orders',component:OrderComponent},
            {path:'music',component:MusicComp},
            {path:'movies',component:MusicDbComp},
            {path:'forms',component:FormsComponent},
            {path:'home',component:HomeComponent},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**',component:NotFound}

        ])
    ],
    declarations:[
        AppComponent,
        CarComponent,
        ProductComp,
        StarComponent,
        productFilter,
        HomeComponent,
        NotFound,
        ProductDetail,
        OrderComponent,
        MusicComp,
        MusicDbComp,
        FormsComponent,
        PriceFilterPipe
    ],
    bootstrap:[
        AppComponent
    ],
    providers:[
        ProductService
    ]
})

export class AppModule{

}
