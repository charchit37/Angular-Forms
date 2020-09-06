import { Directive ,ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private element : ElementRef) { 

    // this.element.nativeElement.style.color='blue';


  }

@HostBinding('style.color') colorBind :string 

@HostListener('click') onClick() {

this.colorBind = 'blue';

}


}
