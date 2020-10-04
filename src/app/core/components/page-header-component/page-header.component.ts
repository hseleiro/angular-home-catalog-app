import {Component, Input, OnInit} from '@angular/core';
import {PageHeaderModel} from "../../models/page-header-model/page-header-model";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() options: PageHeaderModel;
  pageTile: string;

  constructor() { }

  ngOnInit(): void {
    this.pageTile = this.options.header.title;
  }

}
