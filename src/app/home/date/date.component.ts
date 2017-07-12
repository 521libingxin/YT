
import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @Input() dateObj: any;
  datetime = '';
  nowTime = '';
  monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  tr = [1, 2, 3, 4, 5, 6];
  td = ['日', '一', '二', '三', '四', '五', '六' ];
  morehide = false;
  mouseover = false;
  constructor() { }
  ngOnInit() {
      const day = new Date();
      this.init(day);
      this.nowTime = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + day.getDate();
  }
  init(t_date) {
    const t_month = t_date.getMonth();
    const t_year = t_date.getFullYear();
    const firstDay = new Date(t_year + ' ' + (t_month + 1) + ' ' + 1);
    this.dateObj['weekDay'] = firstDay.getDay();
    this.dateObj['month'] = t_month + 1;
    this.dateObj['year'] = t_year;
    this.dateObj['date'] = t_date.getDate();

    this.datetime = this.dateObj.year + '-' + this.dateObj.month + '-' + this.dateObj.date;
    this.morehide = false;
  }
  inputblur() {
    if (!this.mouseover) {
      this.morehide = false;
    }
  }
  getDay(day) {
    day = day - this.dateObj.weekDay + 1;
    if (day < 1) {
      return this.getMonthNum(this.dateObj.month - 1 ? this.dateObj.month - 1 : 12) + day;
    }else if (day > this.getMonthNum(this.dateObj.month)) {
      return day - this.getMonthNum(this.dateObj.month);
    }else {
      return day;
    }
  }
  buttonClass(day): Object  {
    day = day - this.dateObj.weekDay + 1;
    if (day < 1 || day > this.getMonthNum(this.dateObj.month)) {
      return {
        'disnone': true
      };
    }else if (this.nowTime === this.dateObj.year + '-' + this.dateObj.month + '-' + day) {
      return {
        'disblock': true,
        'colorful': true
      };
    }else if (this.datetime === this.dateObj.year + '-' + this.dateObj.month + '-' + day) {
      return {
        'disblock': true,
        'colorBlue': true
      };
    }else {
      return {
        'disblock': true
      };
    }
  }
  goDay(day) {
    const newday = day - this.dateObj.weekDay + 1;
    let allday = this.dateObj.year + '-' + this.dateObj.month + '-' + this.getDay(day);
    if (newday < 1) {
      if (this.dateObj.month - 1 < 1) {
        allday = this.dateObj.year - 1 + '-' + 12 + '-' + this.getDay(day);
      }else {
        allday = this.dateObj.year + '-' + (this.dateObj.month - 1) + '-' + this.getDay(day);
      }
      this.init(new Date(allday));
    }else if (newday > this.getMonthNum(this.dateObj.month)) {
      if (this.dateObj.month > 11) {
        allday = this.dateObj.year + 1 + '-' + 1 + '-' + this.getDay(day);
      }else {
        allday = this.dateObj.year + '-' + (this.dateObj.month + 1) + '-' + this.getDay(day);
      }
      this.init(new Date(allday));
    }else {
      this.init(new Date(allday));
    }
  }
  goYear(year) {
    this.init(new Date(year + ' ' + this.dateObj.month + ' ' + this.dateObj.date));
  }
  goMonth(month) {
    this.init(new Date(this.dateObj.year + '-' + this.dateObj.month + '-' + this.dateObj.date));
  }
  getMonthNum(t_month) {
    switch (t_month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 2:
        if (this.dateObj.year % 4 === 0) {
          return 29;
        }else {
          return 28;
        }
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      default:
        break;
    }
  }

}