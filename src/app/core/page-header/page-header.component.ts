import {Component, Input, OnInit} from '@angular/core';
import {PageHeader} from "../models/page-header/page-header";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() options: PageHeader;
  pageTile: string;

  constructor() { }

  ngOnInit(): void {
    this.pageTile = this.options.header.title;
  }

}
