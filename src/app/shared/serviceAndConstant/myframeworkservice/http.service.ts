import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppConfigurationService, AppConfiguration } from "./app.configuration.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class HttpService {

    constructor(private httpClient: HttpClient, private appconfigService: AppConfigurationService) {

    }
    postData(request: Request, httpOptions: any) {
        return new Observable((observe) => {
            const config: AppConfiguration = this.appconfigService.getConfiguration();
            this.httpClient.post(request.reqURL, request.data, httpOptions).subscribe(
                (response) => {
                    console.log("response rec")
                    observe.next(response);
                },
                (error) => {
                    console.log("Error");
                    observe.next(error);
                }
            );

        })
    }
    putData(request: Request) {
        return new Observable((observe) => {
            const config: AppConfiguration = this.appconfigService.getConfiguration();
            this.httpClient.put(request.reqURL, request.data).subscribe(
                (response) => {
                    observe.next(response);
                },
                (error) => {
                    observe.next(error);
                }
            );

        })
    }
    getData(request: Request) {
        return new Observable((observe) => {
            const config: AppConfiguration = this.appconfigService.getConfiguration();
            this.httpClient.get(request.reqURL).subscribe(
                (response) => {
                    observe.next(response);
                },
                (error) => {
                    observe.next(error);
                }
            );

        })
    }
    deleteData(request: Request) {
        return new Observable((observe) => {
            const config: AppConfiguration = this.appconfigService.getConfiguration();
            this.httpClient.delete(request.reqURL, request.data).subscribe(
                (response)=>{
                    observe.next(response);
                },
                (error)=>{
                    observe.next(error);
                }
            );

        })
    }

}

export interface Request {
    context: string;
    reqURL?: string;
    headers: HttpHeaders;
    data?: any;
    queryString: string;
    responseType?: any;
}