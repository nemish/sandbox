import { combineReducers } from 'redux';
import * as app from './appReducer'

export default combineReducers({
    ...app
});
