
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CommonService } from "../serviceAndConstant/service/common.service";
@Injectable({
    providedIn:'root'
})
export class UserService {
    constructor(private commonService: CommonService) { }
    createUser(userData: JSON) {
        let httpHeaders:HttpHeaders=new HttpHeaders();
        httpHeaders.append('Content-Type','application/json');
        return new Observable((observe) => {
            this.commonService.sendRequest("admin/createUser", 'POST', userData, httpHeaders, null, null).subscribe(
                (response)=>{
                    console.log("Response in userservice rec");
                },
                (error)=>{
                    console.log("Error in user");
                }
            );
        })
    }
}