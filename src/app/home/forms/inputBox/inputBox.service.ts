
import { Injectable } from '@angular/core';
import { customerData, factoryData } from './inputSearch';
@Injectable()
export class InputBoxService {
    customerObj = {
        '客户1号': {
            'name': 'shangpin1hao',
            'price': '123'
        },
        '客户2号': {
            'name': 'shangpin2hao',
            'price': '123'
        },
        '客户3号': {
            'name': 'shangpin3hao',
            'price': '123'
        },
        '信用1号': {
            'name': 'shangpin2hao',
            'price': '123'
        },
        '信用2号': {
            'name': 'shangpin2hao',
            'price': '123'
        },
        '沈阳巴拉1号': {
            'name': 'shangpin3hao',
            'price': '123'
        },
        '沈阳巴拉2号': {
            'name': 'shangpin3hao',
            'price': '123'
        },
        '沈阳巴拉3号': {
            'name': 'shangpin3hao',
            'price': '123'
        },
        '客户4号': {
            'name': 'shangpin4hao',
            'price': '123'
        }
    };
    factoryObj = {
        '库房1号': {
            'name': 'shangpin1hao',
            'price': '123'
        },
        '库房2号': {
            'name': 'shangpin2hao',
            'price': '123'
        },
        '库房3号': {
            'name': 'shangpin3hao',
            'price': '123'
        },
        '京东库房2号': {
            'name': 'shangpin2hao',
            'price': '123'
        },
        '淘宝库房1号': {
            'name': 'shangpin3hao',
            'price': '123'
        },
        '淘宝库房2号': {
            'name': 'shangpin3hao',
            'price': '123'
        },
        '淘宝库房3号': {
            'name': 'shangpin3hao',
            'price': '123'
        },
        '亚马逊库房1号': {
            'name': 'shangpin3hao',
            'price': '123'
        },
        '亚马逊库房2号': {
            'name': 'shangpin3hao',
            'price': '123'
        },
        '亚马逊库房3号': {
            'name': 'shangpin3hao',
            'price': '123'
        },
        '库房4号': {
            'name': 'shangpin4hao',
            'price': '123'
        }
    };
    // 最大搜索长度
    t_search_len = 20;
    // 搜索展示数量
    t_show_len = 10;
    constructor() {
        this.init(this.customerObj, customerData);
        this.init(this.factoryObj, factoryData);
    }
    init(fromObj, data) {
        for (const key in fromObj) {
            if (fromObj.hasOwnProperty(key)) {
                const t_obj = {};
                t_obj['search'] = key;
                t_obj['show'] = fromObj[key];
                data.t_list.push(t_obj);
                const t_search = key;
                data.t_string_1 += ',';
                    for (let j = 0; j < t_search.length; j++){
                        const t_now_key = t_search.slice(j,j + 1);
                        data.t_string_1 += t_now_key;
                        const t_now_num = data.t_base_num + j;
                        data.t_obj_str[t_now_num] = {s: data.jishu, e: j };
                    }
                data.t_base_num += t_search.length + 1;
                data.jishu++;
            }
        }
    }

    getsearch(keys: any, type: any) {
        let Obj: any;
        switch (type) {
            case 'customer':
                Obj = customerData;
                break;
            case 'factory':
                Obj = factoryData;
                break;
            default:
                break;
        }
        const t_push_result = {};
        for (let i = 0; i < this.t_search_len; i++) {
            t_push_result[i] = {};
        }
        if (keys === '') {
            return [];
        }
        const patt = new RegExp(keys, 'gi');
        let t_result;
        const t_congfu = {};
        while ((t_result = patt.exec(Obj.t_string_1)) != null) {
            const t_index = patt.lastIndex - 1;
            const t_start_val = Obj.t_obj_str[t_index].s;
            if (t_congfu[t_start_val] === undefined) {
                t_congfu[t_start_val] = 0;
                t_push_result[Obj.t_obj_str[t_index].e][t_start_val] = 0;
            }else {
                continue;
            }
        };
        const t_result_array = [];
        let t_len_end = 0;
        outloop:
        for (let i = 0; i < this.t_search_len; i++) {
            const t_list_r = t_push_result[i];
            for (const ke in t_list_r) {
                if (t_list_r.hasOwnProperty(ke)) {
                    if (t_len_end < this.t_show_len) {
                        t_result_array.push(Obj.t_list[ke]);
                        t_len_end++;
                    }else {
                        break outloop;
                    }
                }
            }
        }
        return t_result_array;
}
}
