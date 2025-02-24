// postRedux.js

// Actions
const FETCH_POST_START = "FETCH_POST_START";
const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";
const DELETE_POST = "DELETE_POST";
const UPDATE_POST = "UPDATE_POST";

// Action Creators
export const fetchPostStart = () => ({ type: FETCH_POST_START });
export const fetchPostSuccess = (post) => ({
  type: FETCH_POST_SUCCESS,
  payload: post,
});
export const fetchPostFailure = (error) => ({
  type: FETCH_POST_FAILURE,
  payload: error,
});
export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});
export const updatePost = (postId, postData) => ({
  type: UPDATE_POST,
  payload: { postId, postData },
});

// Reducer
const initialState = {
  post: {},
  isLoading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_START:
      return { ...state, isLoading: true };
    case FETCH_POST_SUCCESS:
      return { ...state, post: action.payload, isLoading: false };
    case FETCH_POST_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case DELETE_POST:
      return { ...state, post: {} };
    case UPDATE_POST:
      return {
        ...state,
        post: { ...state.post, ...action.payload.postData },
      };
    default:
      return state;
  }
};

export default postReducer;
