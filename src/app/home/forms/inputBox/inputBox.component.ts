
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputBoxService } from './inputBox.service';
@Component({
  moduleId: module.id,
  selector: 'app-inputbox',
  templateUrl: './inputBox.component.html',
  styleUrls: ['./inputBox.component.css']
})
export class InputBoxComponent implements OnInit {
  @Input() inputIn: any;
  @Output() inputChange = new EventEmitter<boolean>();
  searchList = [];
  mouseover = false;
  constructor(private inputboxservice: InputBoxService) { }

  ngOnInit() {}
  addval(val) {
    this.inputIn.value = val;
    this.searchList = [];
  }
  inputblur() {
    if (!this.mouseover) {
      this.searchList = [];
    }
  }
  searchval(e) {
    this.searchList = this.inputboxservice.getsearch(e.target.value, this.inputIn.type);
    //this.inputIn.value = 555;
    //this.inputChange.emit();
  }
}