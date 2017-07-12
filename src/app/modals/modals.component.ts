
import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../service/modals.service';

@Component({
  moduleId: module.id,
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  isopen = false;
  modalList = [];
  constructor(private modal: ModalsService) { }
  ngOnInit() {
    this.modal.modalsOpened$.subscribe(
        (list) => {
          this.isopen = list.open;
          if (list.open) {
            if (list.add) {
              this.modalList.push(list);
            }else {
              this.modalList = [list];
            }
          }else{
            this.modalList = [];
          }
        }
    );
  }
}