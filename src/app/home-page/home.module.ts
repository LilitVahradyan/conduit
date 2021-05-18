import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        MatChipsModule,
        HomeRoutingModule,
        PaginationModule
    ],

})


export class HomeModule {

}