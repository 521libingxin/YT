
import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../service/modals.service';

@Component({
  moduleId: module.id,
  selector: 'app-modaltype2',
  templateUrl: './modaltype2.component.html',
  styleUrls: ['./modaltype2.component.css']
})
export class Modaltype2Component implements OnInit {
  constructor(private modal: ModalsService) {}

  ngOnInit() {}
  openother() {
    this.modal.openModals({
      'open': true,
      'add': false,
      'type': 3,
      'data': {}
    });
  }

}