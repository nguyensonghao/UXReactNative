import { firebase } from './firebase';

export const insert = (collection, data) => {
    return new Promise((resolve, reject) => {
        firebase.database().ref(`${collection}/${Date.now()}`).set(data).then(result => {
            resolve({
                status: true
            })
        }).catch(e => {
            resolve({
                status: false,
                message: e.message
            })
        })
    })
}

export const list = (collection) => {
    return new Promise((resolve, reject) => {
        firebase.database().ref(collection).on('value', (result => {
            resolve({
                status: true,
                data: convertData(result.val())
            })
        }), (e) => {
            resolve({
                status: false,
                message: e.message
            })
        })
    })
}

export const convertData = (list => {
    let result = [];
    for (let key in list) {
        result.push({
            ...list[key],
            id: key
        })
    }

    return result;
})