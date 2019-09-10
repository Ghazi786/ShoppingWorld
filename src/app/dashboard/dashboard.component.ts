import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from './productlist/productlist.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare const $: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public productList: any[];
    show = false;
    myInterval;
    onUploadFile(event) {
        let file: File = event.target.files[0];
        console.log(file.name);
        let formData = new FormData();
        formData.append('file', file);
        this.http.post('http://localhost:4201/bulkTask/usingExcel', formData).subscribe((data) => {
            console.log("hello india")
        });
    }
    constructor(private prductService: ProductService, private router: Router, private http: HttpClient) { }
    public ngOnInit() {
       
        this.productList = [
            {
                imageId: "./assets/img/card-1.jpg",
                name: "this is nice card you have to use this once",
                prize: "$1234"
            },
            {
                imageId: "./assets/img/card-1.jpg",
                name: "this is nice card you have to use this once",
                prize: "$1234"
            },
            {
                imageId: "./assets/img/card-1.jpg",
                name: "this is nice card you have to use this once",
                prize: "$1234"
            },
            {
                imageId: "./assets/img/card-1.jpg",
                cardDescription: "this is nice card you have to use this once"
            },
            {
                imageId: "./assets/img/card-1.jpg",
                name: "this is nice card you have to use this once",
                prize: "$1234"
            },
        ];
        // this.getProductList();
    }
    // onMouseEnter(){
    //     $(document).ready(function() {
    //         //this.myInterval=false;
    //         $(".preview").hide();
    //         // $("div.list").each(function() {
    //         //     $(".preview:first", this).show();
    //         // });
    //         $('.preview').hover(function(e) {
    //                 var $imgGrp = $(e.target);
    //                 var $parent = $imgGrp.parent();
    //                 var $firstImage = $parent.children('.preview:first');
    //                 var iOffSet = $firstImage.offset();
    //                 this.myInterval = setInterval(function() {
    //                     var $nextImg;
    //                     $firstImage.hide();
    //                     if ($imgGrp.next('.preview').length == 0) {
    //                         $imgGrp.fadeOut('normal');
    //                         $imgGrp = $firstImage;
    //                         $nextImg = $imgGrp;
    //                     } else
    //                         $nextImg = $imgGrp.next('.preview');
    //                         if ($imgGrp != $nextImg)
    //                         $imgGrp.fadeOut('normal');

    //                     $nextImg.fadeIn('normal');
    //                     $imgGrp = $nextImg;
    //                 }, 1000);
    //             },
    //             function() {
    //                 var $imgGrp = $(this);
    //                 var $parent = $imgGrp.parent();
    //                 var $firstImage = $parent.children('.preview:first');
    //                 if ($(this).attr('src') != $firstImage.attr('src')) {
    //                     $(this).fadeOut('fast');
    //                 }
    //                 console.log("clear");
    //                 $firstImage.fadeIn('fast');
    //                 clearInterval(this.myInterval);
    //                // this.myInterval=false;
    //             });
    //     });

    //     console.log("mouse enter");
    // }
    // onMouseLeave(){

    //     this.show=false;
    //     console.log("keave");
    // }
   
    getProductList() {

        this.prductService.getAllProduct().subscribe((response) => {
            console.log(response);
        })
    }
    detailsOfProduct() {
        this.router.navigate(['/detailsProduct']);
       
    }
}
