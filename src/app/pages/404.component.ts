import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: '404.component.html'
})
export class p404Component {
  constructor(
    private location: Location
  ) {}

  back() {
    this.location.back();
  }
}