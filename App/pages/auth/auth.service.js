import { firebase } from '../../services/firebase';

export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
            resolve({
                status: true,
                data: res
            })
        }).catch(e => {
            if (e.code == 'auth/invalid-email') {
                resolve({
                    status: false,
                    message: 'Email không hợp lệ!'
                })
            } else {
                resolve({
                    status: false,
                    message: e.message
                })
            }
        })
    })    
}

export const register = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
            resolve({
                status: true,
                data: res
            })
        }).catch(e => {
            if (e.code == 'auth/invalid-email') {
                resolve({
                    status: false,
                    message: 'Email không hợp lệ!'
                })
            } else {
                resolve({
                    status: false,
                    message: e.message
                })
            }
        })
    })    
}

export const getInfo = () => {
    return firebase.auth().currentUser;
}