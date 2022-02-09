import {SET_LOGIN, SET_LOGOUT} from '../authActions';

const initialState = {
  isLogin:false
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isLogin:true
      };
    case SET_LOGOUT:
      return {
        ...state,
        isLogin:false
      };
    default:
      return state; //must be like this so it can  presist the reducers
  }
}
