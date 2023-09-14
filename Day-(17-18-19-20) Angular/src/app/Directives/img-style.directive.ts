import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ImgStyle]'
})
export class ImgStyleDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.borderRadius = '10px';
    this.elementRef.nativeElement.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.2)';
  }

  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.boxShadow= '0 8px 32px 0 rgba(0, 0, 0, 0.5)';
  }

  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.2)';
}
}
