import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class AppConfigurationService {
    private appConfiguration: AppConfiguration;
    constructor(private httpClient: HttpClient) { }
    loadConfiguration(filePath: string) {
        return new Promise((resolve, reject) => {
            this.httpClient.get<AppConfiguration>(filePath).toPromise().then((response) => {
                this.appConfiguration = response;
                console.log("Congiguration file loade","ip="+this.appConfiguration.ip,
                "context="+this.appConfiguration.port,"context="+this.appConfiguration.context);
                resolve("Congiguration file loade"+"ip="+this.appConfiguration.ip+
                "context="+this.appConfiguration.port+"context="+this.appConfiguration.context);
            }).catch((reject) => {
                console.log("Error in loding Configuration file");
                reject("Error")
            })
        })
    }
    getConfiguration() {
        return this.appConfiguration;
    }
}
export interface AppConfiguration {
    ip: String,
    port: Number,
    context: String
} 