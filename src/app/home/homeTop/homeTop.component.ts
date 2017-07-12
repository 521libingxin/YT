
import { Component, OnInit } from '@angular/core';
import { Lbx1Component } from './lbx1/lbx1.component';
import { Lbx2Component } from './lbx2/lbx2.component';
@Component({
  moduleId: module.id,
  selector: 'app-hometop',
  templateUrl: './homeTop.component.html',
  styleUrls: ['./homeTop.component.css']
})
export class HomeTopComponent implements OnInit {

  componentData = null;
  constructor() { }
  ngOnInit() {
    // delete this.abc['lbx'];
    // console.log(this.abc);
  }
  bibi() {
    console.log('就是哔哔哔');
  }

  createHelloWorldComponent() {
    this.componentData = {
      component: Lbx1Component,
      inputs: {
        showNum: 9
      }
    };
  }
  createWorldHelloComponent() {
    this.componentData = {
      component: Lbx2Component,
      inputs: {
        showNum: 2
      }
    };
  }
}
