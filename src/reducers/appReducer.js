import createReducer from '../lib/utils'
import { FETCH_POSTS__SUCCESS } from '../actions/posts_actions'


export const posts = createReducer([], {
    [FETCH_POSTS__SUCCESS](state, action) {
        return action.items
    }
});
