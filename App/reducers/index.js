import { combineReducers } from 'redux';

import loading from './loading';
import user from './user';
import layout from './layout';

export default combineReducers({
    loading,
    user,
    layout
})