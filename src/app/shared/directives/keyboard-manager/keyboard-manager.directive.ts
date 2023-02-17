import { Directive, HostListener, ContentChildren, QueryList } from '@angular/core';
import { KeyboardManagerItemDirective } from './keyboard-manager-item.directive';

@Directive({
  selector: '[appKm]'
})
export class KeyboardManagerDirective {

  @ContentChildren(KeyboardManagerItemDirective) public items: QueryList<KeyboardManagerItemDirective>;

  private keys: any = {
    ArrowUp: () => {
      this.moveFocus(ArrowDirection.RIGHT)
    },
    ArrowDown: () => {
      this.moveFocus(ArrowDirection.LEFT)
    },
    ArrowLeft: () => {
      this.moveFocus(ArrowDirection.LEFT)
    },
    ArrowRight: () => {
      this.moveFocus(ArrowDirection.RIGHT)
    },
  }

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {

    const func = this.keys[event.key];
    func(event);
  }

  public moveFocus(direction: ArrowDirection) : KeyboardManagerItemDirective{

    return null;
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1
}