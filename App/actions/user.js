import { SET_USER } from '../constants/actionTypes';

export const set = (user) => {
    return {
        type: SET_USER,
        data: user
    }
}