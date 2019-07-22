import { SET_DRAWER } from '../constants/actionTypes';

export const openDrawer = (data) => {
    return {
        type: SET_DRAWER,
        data
    }
}