
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { YilaiService } from '../../service/yilai.service';
declare var XLSX;
declare var startsave;
@Component({
  moduleId: module.id,
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [YilaiService]
})
export class FormsComponent implements OnInit, AfterViewInit {
  @Input() formsObj: any;
  inputCustomer = {
    'type': 'customer',
    'value': '1'
  };
  inputFactory = {
    'type': 'factory',
    'value': '2'
  };
  dateTime = {};
  trlist = [{
      'name': '行号',
      'width': 40
    },
    {
      'name': '操作',
      'width': 90
    },
    {
      'name': '姓名',
      'width': 100
    },
    {
      'name': '介绍',
      'width': 90
    },
    {
      'name': '匹配',
      'width': 90
    },
    {
      'name': '年龄',
      'width': 40
    },
    {
      'name': '工龄',
      'width': 50
    }
  ];
  listset = {
    height: 30,
    haschild: 2,
    from: 5,
    to: 6,
    parentName: '合计'
  };
  ulList: Array<Object> = [
    {
      '姓名': '李冰心',
      '介绍': '哈啦啦',
      '年龄': 18,
      '工龄': 5
    },
    {
      '姓名': '汤娇娇',
      '介绍': '上来了',
      '年龄': 17
    },
    {
      '姓名': '亚历山大',
      '年龄': 21
    },
    {
      '姓名': '哦买噶',
      '工龄': 8
    },
    {
      '姓名': '诶我去',
      '工龄': 34
    },
    {
      '姓名': '妈哈哈',
    }
  ];
  addkeynew: Object = {};
  addkey: Object = {
    '年龄': 0,
    '工龄': 0
  };
  moveObj = {
    clickindex: 0,  // 开始移动索引
    hoverindex: -2, // 移动到位置在哪？
    clicked: false  // 是否开始移动
  };
  changeObj = {
    changestartW: 0, // 改变元素的初始宽度
    changestartX: 0, // 改变元素的初始坐标
    lineclick: false, // 是否开始改变
    lineindex: -2, // 改变元素的索引
    minWidth: 40
  };
  /*constructor(private yl: YilaiService) {
    super.bibi();
    //yl.haha();
   }*/
   constructor(private yl: YilaiService) {
     yl.haha();
   }
  ngOnInit() {}

  ngAfterViewInit() {
    this.addkeynew = JSON.parse(JSON.stringify(this.addkey));
    this.addkey = {
      '年龄': 0,
      '工龄': 0
    };
  }
  getAdd(key, val) {
    if (typeof(val) === 'number') {
      this.addkey[key] += val;
    }
  }
  inputChange() {
    console.log(123);
  }
  removeul(index) {
    this.ulList.splice(index, 1);
  }
  addul(index) {
    this.ulList.splice( index + 1 , 0 , {'姓名': '无'});
  }
  downloadExcel() {
    const t_obj = {};
    const t_base_i = 1;
    const t_base_j = 2;
    let t_end_key = 'A1';
    const newtrlist = [];
    for (let i = 0,len = this.trlist.length; i < len; i++) {
      const t_name = this.trlist[i]['name'];
      if (t_name !== '行号' && t_name !== '操作' ){
        newtrlist.push(this.trlist[i]);
      }
    }
    for (let i = 0,len = newtrlist.length; i < len; i++) {
      const t_left = String.fromCharCode(t_base_i + i + 64);
      const t_key_str = t_left + 1;
      const t_val_name = newtrlist[i]['name'];
      t_obj[t_key_str] = { v: t_val_name };
      const t_new_list = this.ulList.concat([this.addkeynew]);
      for (let j = 0,lenj = t_new_list.length; j < lenj; j++) {
        const t_key_strb = t_left + (t_base_j + j);
        const t_key_val = t_new_list[j][t_val_name];
        if(t_key_val) {
          t_obj[t_key_strb] = { v: t_key_val };
        }
        t_end_key = t_key_strb;
      }
    }
    t_obj['!ref'] = 'A1:' + t_end_key;
    startsave.haha(t_obj);
  }
  getparentStyle() {
    if (this.listset.haschild === 2) {
      let leftnum = 0;
      let widthnum = 1;
      for (let i = 0,len = this.trlist.length; i < len; i++){
        if (this.listset.from > i) {
          leftnum = leftnum + this.trlist[i].width;
        }
        if (this.listset.from - 1 < i && i < this.listset.to + 1) {
          widthnum = widthnum + this.trlist[i].width;
        }
      }
      return {
        position: 'absolute',
        top: 0,
        left: leftnum + 'px',
        width: widthnum - 1 + 'px'
      }
    }else {
      return {
        display: 'none'
      }
    }
  }
  getrolespan(index) {
    if ((index < this.listset.from || index > this.listset.to) && this.listset.haschild === 2) {
      return true;
    }else {
      return false;
    }
  }
  mouseClickDown(index) {
      this.moveObj.clicked = true;
      this.moveObj.clickindex = index;
  };
  mouseMove(event, index, width) {
    if (this.moveObj.clicked) {
      if (event.offsetX < width / 2) {
        index--;
      }
      this.moveObj.hoverindex = index;
    }
  };
  mouseUp(event, index, width) {
    if (this.moveObj.clicked) {
      if (this.moveObj.clickindex !== index) {
        if (event.offsetX > width / 2) {
          index++;
        }
        if (this.moveObj.clickindex !== index) {
          if (this.moveObj.clickindex < index) {
            index--;
          }
          this.trlist.splice(index, 0, this.trlist.splice(this.moveObj.clickindex, 1)[0]);
        }
      }
    }
  };
  changeMove(event) {
    if (this.changeObj.lineclick) {
      // 改变当前元素宽度
      let endwidth = this.changeObj.changestartW + event.pageX - this.changeObj.changestartX;
      if (endwidth < this.changeObj.minWidth) {endwidth = this.changeObj.minWidth; };
      this.trlist[this.changeObj.lineindex]['width'] = endwidth;
    }
    return false;
  };

  tdlineDown(event, index) {
    event.cancelBubble = true;
    // 是否开始改变大小
    this.changeObj.lineclick = true;
    // 当前相对坐标
    this.changeObj.changestartX = event.pageX;
    // 当前元素索引
    this.changeObj.lineindex = index;
    // 获得当前宽度
    this.changeObj.changestartW = this.trlist[index]['width'];
  };

  tdlineUp(event) {
    this.moveObj.clicked = false;
    this.moveObj.hoverindex = -2;
    // 鼠标抬起，初始化
    this.changeObj.lineclick = false;
  };
  importf(event) {
    console.log(event.target.files);
    const f = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (es) => {
       const data = es.target['result'];
       if (data.indexOf('<html') > -1) {
        //let table = data.match(/<table.*[^.]*<\/table>/)[0];
        console.log(data);
       }else {
          const wb = XLSX.read(data, {
                type: 'binary'
             });
          console.log(wb);
          this.to_html(wb);
       }
    };
    reader.readAsBinaryString(f);
  }
  to_html(workbook) {
    const result = {};
    let tsheetName = '';
    workbook.SheetNames.forEach(function(sheetName) {
      const roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
      if (roa.length > 0) {
        result[sheetName] = roa;
        tsheetName = sheetName;
      }
    });
    console.log(result);
    this.ulList = result[tsheetName];
  }
}