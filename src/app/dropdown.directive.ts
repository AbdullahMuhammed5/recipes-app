import { Directive, HostListener, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  manageDropdown : boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2)   {

  }

  @HostListener('click') openDropdown(eventData: Event) {
    const dropdownDiv = this.elementRef.nativeElement.children[1];
    if(!this.manageDropdown) {
      this.renderer.addClass(dropdownDiv,'show');
      this.manageDropdown = !this.manageDropdown;
    } else {
      this.renderer.removeClass(dropdownDiv, 'show');
      this.manageDropdown = !this.manageDropdown;
    }
  }

}