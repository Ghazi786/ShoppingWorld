import { NgModule } from "@angular/core";
import { ProductDetailsComponet } from "./productDetails/product-details.component";
import { RouterModule } from "@angular/router";
import { productRoutes } from "./product-management.routing";

@NgModule({
    declarations: [ProductDetailsComponet],
    imports: [RouterModule.forChild(productRoutes)]
})
export class ProductManagementModule {

}