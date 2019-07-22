import { SET_DRAWER } from '../constants/actionTypes';

const reducer = (state = {
    openDrawer: false
}, action) => {
    switch (action.type) {
        case SET_DRAWER: 
            return {
                ...state,
                openDrawer: action.data
            }
        default:
            return state;

    }
}

export default reducer;