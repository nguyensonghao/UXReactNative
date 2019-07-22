import { SET_USER } from '../constants/actionTypes';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_USER: 
            return action.data
        default:
            return {};

    }
}

export default reducer;