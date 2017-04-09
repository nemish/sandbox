import Api from '../lib/api'

export const FETCH_POSTS__SUCCESS = 'FETCH_POSTS__SUCCESS'
export const FETCH_POSTS__FAIL = 'FETCH_POSTS__FAIL'

export function fetchPosts() {
  return dispatch => {
    return Api.get('/posts').then(resp => {
      dispatch({
          type: FETCH_POSTS__SUCCESS,
          items: resp.items
      });
    }).catch( (ex) => {
        console.log(ex)
    });
  }
}
