import { HttpHeaders } from "@angular/common/http";
import { Request, HttpService } from "../myframeworkservice/http.service";
import { Observable, observable } from "rxjs";
import { AppConfigurationService, AppConfiguration } from "../myframeworkservice/app.configuration.service";
import { Injectable } from "@angular/core";
import { HttpConstant } from "../myframeworkservice/http.constant";
@Injectable({
    providedIn:'root'
})
export class CommonService {
    constructor(private httpService: HttpService,private appconfigurationService:AppConfigurationService) { }
    sendRequest(context: string, reqType: string, reqBody: any, headers: HttpHeaders, eventKey: String, queryString: string) {

        reqType = reqType.toUpperCase();
        const request: Request = {
            data: reqBody,
            headers: headers,
            context: context,
            queryString: queryString
        }
        let config:AppConfiguration=this.appconfigurationService.getConfiguration();
        let url:string = `${HttpConstant.PROTOCOL}${config.ip}:${config.port}/${request.context}`;
        request.reqURL=url;
        const httpOptions={
            headers:headers
        }

        console.log("Sending Request:::",request.reqURL,reqType,request.data);
        switch (reqType) {
            case 'POST':
                return new Observable((observe) => {
                    this.httpService.postData(request,httpOptions).subscribe(
                        (response) => {
                            console.log("Posting data");
                            observe.next(response);
                        },
                        (error) => {
                            observe.next(error);
                        }
                    );
                })
                break;
            case 'GET':
                return new Observable((observe) => {
                    this.httpService.getData(request).subscribe(
                        (response) => {
                            observe.next(response);
                        },
                        (error) => {
                            observe.next(error);
                        }
                    )
                })
                break;
            case 'PUT':
                return new Observable((observe)=>{
                    this.httpService.putData(request).subscribe(
                        (response)=>{
                            observe.next(response);
                        },
                        (error)=>{
                            observe.next(error);
                        }
                    )
                })
                break;
            case 'DELETE':
                console.log("Delete method not implemented");
                break;
            default:
                console.log("request type method is not matched with any of standard POST,PUT,GET etc... methods" )
                break;
        }
    }
}