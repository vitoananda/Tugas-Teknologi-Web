import { Directive,HostListener,ElementRef,Input} from '@angular/core';

@Directive({
  selector: '[appInputFormats]'
})
export class InputFormatsDirective {
  // @HostListener('focus') onFocus(){
  //   console.log("on focus");
  // }
  @Input('format') format: any;
  constructor(private el: ElementRef) { }
  @HostListener('blur') onBlur(){
    let value: String = this.el.nativeElement.value;
    if(this.format =='uppercase')
    this.el.nativeElement.value = value.toUpperCase();
    else
    this.el.nativeElement.value = value.toLowerCase();
  }
 

}
