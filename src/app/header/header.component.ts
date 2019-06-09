import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() theme;
  @HostBinding('style.backgroundColor') style;
  constructor() { }

  ngOnInit() {
    this.style = 'black'
  }

}
