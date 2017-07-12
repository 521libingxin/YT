
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-toollist',
  templateUrl: './toolList.component.html',
  styleUrls: ['./toolList.component.css']
})
export class ToolListComponent implements OnInit {
  @Input() toolListObj: any;
  @Output() toolListClick = new EventEmitter<boolean>();

  constructor() {}
  ngOnInit() {}

  clickTo(key: any) {
    this.toolListClick.emit(key);
  }
}