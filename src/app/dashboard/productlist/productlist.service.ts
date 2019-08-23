import { CommonService } from "../../shared/serviceAndConstant/service/common.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { EventConstants } from "../../shared/serviceAndConstant/constant/event.constant";
@Injectable()
export class ProductService {
    constructor(private commonService: CommonService) { }
    getAllProduct() {
        return new Observable((observe) => {
            this.commonService.sendRequest('shop/getAllProduct','GET', null, null, null, null).subscribe(
                (response) => {
                    observe.next(response);
                },
                (error) => {
                    observe.next(error);    
                }

            );
        })

    }
}