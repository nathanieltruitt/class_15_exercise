import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomColor]',
})
export class RandomColorDirective implements OnInit {
  // * use renderer2 as using elementRef to change values can cause issues.
  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      `#${this.getRandomColor()}`
    );
  }

  getRandomColor(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
  }
}
