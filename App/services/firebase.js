import Firebase from 'firebase';
let config = {
    apiKey: 'AIzaSyBGY7pe_ZCYouy2jX9BXeZ7vskcTWriti0',
    authDomain: 'chuabenhthattinh.firebaseapp.com',
    databaseURL: 'https://chuabenhthattinh.firebaseio.com',
    projectId: 'chuabenhthattinh',
    storageBucket: 'chuabenhthattinh.appspot.com'
}

export const firebase = Firebase.initializeApp(config);