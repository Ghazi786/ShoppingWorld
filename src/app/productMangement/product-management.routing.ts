import { Routes } from "@angular/router";
import { ProductDetailsComponet } from "./productDetails/product-details.component";
import { ProductBuyComponent } from "./buyComponent/product-buy.component";

export const productRoutes: Routes = [
    {
        path: '',
        component: ProductDetailsComponet
    },
    {
        path:'process',component:ProductBuyComponent
    }
]