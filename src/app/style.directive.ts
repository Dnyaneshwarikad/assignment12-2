import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(public eobj : ElementRef) 
  {

      this.eobj.nativeElement.style.backgroundColor = 'yellow';
      this.eobj.nativeElement.style.fontWeight= 'bold';
  }

}
