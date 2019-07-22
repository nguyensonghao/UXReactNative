import { firebase } from './firebase';

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
            resolve(user);
        })
    })
}