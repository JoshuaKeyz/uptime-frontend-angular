import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHeaderColor]'
})
export class HeaderColorDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @Input('appHeaderColor') theme;
  ngOnInit() {
    const header: HTMLElement = this.elementRef.nativeElement
    this.renderer.addClass(header.querySelector('header'), `header_${this.theme}`);
  }
}
