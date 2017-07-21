
import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../service/modals.service';
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  menuBase: Object = {
    'biaoti1': {
      'key': 'biaoti1',
      'name': '标题一',
      'type': 'parent',
      'showType': '0',
      'childs': [
        {
          'title': '订单申请',
          'list': ['zilei1', 'zilei2']
        },
        {
          'title': '业务记账',
          'list': ['zilei3']
        }
      ]
    },
    'biaoti2': {
      'key': 'biaoti2',
      'name': '标题二',
      'type': 'parent',
      'showType': '0',
      'childs': [
        {
          'title': '业务记账',
          'list': ['zilei3']
        },
        {
          'title': '订单申请',
          'list': ['zilei1', 'zilei2']
        }
      ]
    },
    'zilei1': {
      'key': 'zilei1',
      'name': '子类按钮一',
      'type': 'child',
      'showType': '1',
    },
    'zilei2': {
      'key': 'zilei2',
      'name': '子类按钮二',
      'type': 'child',
      'showType': '2',
    },
    'zilei3': {
      'key': 'zilei3',
      'name': '子类按钮三',
      'type': 'child',
      'showType': '3',
    }
  };
  checkList = {
    'index': 0,
    'list':['系统', '常用']
  };
  menuList: Array<Object> = ['biaoti1', 'biaoti2'];
  showList = [];
  showObj = {};
  showListIndex = -1;
  leftListKey = '';
  constructor(private modal: ModalsService) {}
  ngOnInit() {
    this.clickTo('biaoti1');
    this.clickTo('zilei3');
  }
  openModal() {
    this.modal.openModals({
      'open': true,
      'add': true,
      'type': 1,
      'data': {}
    });
  };
  clickTo(key: any) {
    const t_obj = this.menuBase[key];
    if (t_obj['type'] === 'child') {
      this.showList.push(t_obj);
      this.showListIndex = this.showList.length - 1;
    }else {
      this.leftListKey = key;
      if (this.showObj[key] === undefined) {
        this.showList.push(t_obj);
        this.showListIndex = this.showList.length - 1;
        this.showObj[key] = this.showListIndex;
      }else {
        this.showListIndex = this.showObj[key];
      }
    }
    console.log(this.leftListKey);
  }
}