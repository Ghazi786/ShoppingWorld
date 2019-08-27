import { NgModule } from "@angular/core";
import { ProductDetailsComponet } from "./productDetails/product-details.component";
import { RouterModule } from "@angular/router";
import { productRoutes } from "./product-management.routing";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../app.module";
import { ProductBuyComponent } from "./buyComponent/product-buy.component";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

@NgModule({
    declarations: [
        ProductDetailsComponet,
        ProductBuyComponent
    ],
    imports: [
        RouterModule.forChild(productRoutes),
        FormsModule,
        MaterialModule,
        CommonModule,
        HttpModule
    ]
})
export class ProductManagementModule {

}