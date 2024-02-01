import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {

  @Input() url: string = '';
  @Input() alt: string = '';

  hasLoaded: boolean = false;

  onLoad(): void {

    this.hasLoaded = true;
  }
}
