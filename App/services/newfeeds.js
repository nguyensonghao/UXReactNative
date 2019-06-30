import * as dataService from './data';
import { firebase } from './firebase';
import moment from 'moment';

export const list = () => {
    return new Promise((resolve, reject) => {
        dataService.list('newfeeds').then(res => {
            if (res.status) {
                let list = res.data;
                list.forEach(item => {
                    item.time = moment().format('H:mm ngày MM/DD/YYYY');
                })

                resolve({
                    status: true,
                    data: list
                })
            } else {
                resolve(res);
            }
        })
    })
}