import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ProductService } from './productlist/productlist.service';
import { HttpClientModule } from '@angular/common/http';
import { ImageInLoop } from './productlist/imageloop.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
        HttpClientModule

    ],
    declarations: [
        DashboardComponent,
        ImageInLoop
    ],
    providers: [ProductService]
})

export class DashboardModule { }
