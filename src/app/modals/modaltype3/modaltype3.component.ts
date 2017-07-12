
import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../service/modals.service';

@Component({
  moduleId: module.id,
  selector: 'app-modaltype3',
  templateUrl: './modaltype3.component.html',
  styleUrls: ['./modaltype3.component.css']
})
export class Modaltype3Component implements OnInit {
  constructor(private modal: ModalsService) {}

  ngOnInit() {}
  close() {
    this.modal.openModals({
      'open': false,
      'add': false,
      'type': 3,
      'data': {}
    });
  }
}