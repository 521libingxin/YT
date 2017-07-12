
import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../service/modals.service';

@Component({
  moduleId: module.id,
  selector: 'app-modaltype1',
  templateUrl: './modaltype1.component.html',
  styleUrls: ['./modaltype1.component.css']
})
export class Modaltype1Component implements OnInit {
  constructor(private modal: ModalsService) {}

  ngOnInit() {}
  openmore() {
    this.modal.openModals({
      'open': true,
      'add': true,
      'type': 2,
      'data': {}
    });
  }
  openother() {
    this.modal.openModals({
      'open': true,
      'add': false,
      'type': 3,
      'data': {}
    });
  }
}