import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpParams, HttpClient } from "@angular/common/http";

@Component({
    selector: 'product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponet {
    constructor(private router: Router, private http: HttpClient) { }
    onBuyClick() {
        this.router.navigate(['detailsProduct/process']);
    }
    downLoadTemplate() {
        let params = new HttpParams().set('transactions[0][type]', 'title')
            .append("transactions[0][value]", "Ghazi_Hello")
            .append("transactions[1][type]", "custom.Jio BTAS-FixedInReleases")
            .append("transactions[1][value]", "NA")
            .append("transactions[2][type]", "custom.Jio BTAS-Environment")
            .append("transactions[2][value]", "NA")
            .append("transactions[3][type]", "custom.Jio BTAS-ServiceImpact")
            .append("transactions[3][value]", "NA")
            .append("transactions[4][type]", "custom.Jio BTAS-RCADescription")
            .append("transactions[4][value]", "NA")
            .append("transactions[5][type]", "custom.Jio BTAS-Severity")
            .append("transactions[5][value]", "NA")
            .append("transactions[6][type]", "custom.Jio BTAS-Releases")
            .append("transactions[6][value]", "NA")
            .append("transactions[7][type]", "subscribers.add")
            .append("transactions[7][value][0]", "Nisha")
            .append("transactions[8][type]", "owner")
            .append("transactions[8][value]", "Ghajnafar.Shahid");
        this.http.get('http://10.64.111.61:8080/api/maniphest.edit', { params: params }).subscribe((data) => {
            console.log("Data", data);

        })
        //     this.router.navigate(['http://10.64.111.61:8080/api/maniphest.edit'],
        //     { queryParams: { "transactions[0][type]": "title"
        //     ,"transactions[0][value]": "Ghazi_attack"
        //     ,"transactions[1][type]": "custom.Jio BTAS-FixedInReleases"
        //     ,"transactions[1][value]": "NA"
        //     ,"transactions[2][type]": "custom.Jio BTAS-Environment"
        //     ,"transactions[2][value]": "NA"
        //     ,"transactions[3][type]": "custom.Jio BTAS-ServiceImpact"
        //     ,"transactions[3][value]": "NA"
        //     ,"transactions[4][type]": "custom.Jio BTAS-RCADescription"
        //     ,"transactions[4][value]": "NA"
        //     ,"transactions[5][type]": "custom.Jio BTAS-Severity"
        //     ,"transactions[5][value]": "NA"
        //     ,"transactions[6][type]": "custom.Jio BTAS-Releases"
        //     ,"transactions[6][value]": "NA"
        //     ,"transactions[7][type]": "subscribers.add"
        //     ,"transactions[7][value]": ["Nisha"]
        //     ,"transactions[8][type]": "owner"
        //     ,"transactions[8][value]": "Ghajnafar.Shahid"
        // }});
        console.log("Hitting web api");

        //  this.http.get('');
        // this.user_role_service.downLoadTemplate().subscribe(data => {
        //     console.log(data);

        // })
    }
}