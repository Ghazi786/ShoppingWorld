import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[imageinloop]'
})
export class ImageInLoop {
    setInterval: any;
    constructor(private eleRef: ElementRef) {

    }
    @HostListener('mouseenter') onMouseEnter() {
        let i=1;
        this.setInterval = setInterval(() => {
            console.log('this.eleRef :', this.eleRef.nativeElement.src);
            this.eleRef.nativeElement.src="http://localhost:4200/assets/img/card-"+i+".jpg";
            i++;
            if(i==4){
                i=1;
            }

        }, 1000)
    }
    @HostListener('mouseleave') onMouseLeave() {
        clearInterval(this.setInterval);
        console.log('this.setInterval :', this.setInterval);
        this.eleRef.nativeElement.src="http://localhost:4200/assets/img/card-1.jpg"
    }
}