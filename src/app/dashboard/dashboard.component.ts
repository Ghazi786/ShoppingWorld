import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from './productlist/productlist.service';
import { Router } from '@angular/router';
declare const $: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    productList: any[];
    constructor(private prductService: ProductService, private router: Router) { }
    // startAnimationForBarChart(chart: any) {
    //     let seq2: any, delays2: any, durations2: any;
    //     seq2 = 0;
    //     delays2 = 80;
    //     durations2 = 500;
    //     chart.on('draw', function (data: any) {
    //         if (data.type === 'bar') {
    //             seq2++;
    //             data.element.animate({
    //                 opacity: {
    //                     begin: seq2 * delays2,
    //                     dur: durations2,
    //                     from: 0,
    //                     to: 1,
    //                     easing: 'ease'
    //                 }
    //             });
    //         }
    //     });

    //     seq2 = 0;
    // }
    // constructor(private navbarTitleService: NavbarTitleService) { }
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
    // ngAfterViewInit() {
    //     const breakCards = true;
    //     if (breakCards === true) {
    //         // We break the cards headers if there is too much stress on them :-)
    //         $('[data-header-animation="true"]').each(function () {
    //             const $fix_button = $(this);
    //             const $card = $(this).parent('.card');
    //             $card.find('.fix-broken-card').click(function () {
    //                 const $header = $(this).parent().parent().siblings('.card-header, .card-image');
    //                 $header.removeClass('hinge').addClass('fadeInDown');

    //                 $card.attr('data-count', 0);

    //                 setTimeout(function () {
    //                     $header.removeClass('fadeInDown animate');
    //                 }, 480);
    //             });

    //             $card.mouseenter(function () {
    //                 const $this = $(this);
    //                 const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
    //                 $this.attr('data-count', hover_count);
    //                 if (hover_count >= 20) {
    //                     $(this).children('.card-header, .card-image').addClass('hinge animated');
    //                 }
    //             });
    //         });
    //     }
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
