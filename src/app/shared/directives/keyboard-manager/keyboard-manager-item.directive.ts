import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appKmItem]'
})
export class KeyboardManagerItemDirective {

  constructor(private el: ElementRef<HTMLElement>) {
  }

  public focus(): void {
    this.el.nativeElement.focus();
  }

  public isFocused(): boolean {
    return this.el.nativeElement === document.activeElement;
  }
}
