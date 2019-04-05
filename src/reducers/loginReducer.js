/**
 * @Author: Mario
 * @Date:   2018-07-26T19:19:30+08:00
 * @Last modified by:   Mario
 * @Last modified time: 2019-04-05T23:04:06+08:00
 */

"use-strict";

import * as types from "../constants/LoginTypes";

const initialState = {
  data: {
    name: null,
    password: null,
    status: "点击登录",
    isSuccess: false,
    user: null
  }
};

export default function loginIn(state = initialState, action) {
  console.log("看看这个", state.type, "看看那个", action);
  switch (action.type) {
    case types.LOGIN_NAME:
      return {
        ...state,
        data: action.data
      };
    case types.LOGIN_PASSWORD:
      return {
        ...state,
        data: action.data
      };
    case types.LOGIN_IN_DOING:
      return {
        ...state,
        data: action.data
      };

    case types.LOGIN_IN_DONE:
      return {
        ...state,
        data: action.data
      };

    case types.LOGIN_IN_ERROR:
      return {
        ...state,
        data: action.data
      };
    case types.LOGIN_IN_OUT:
      return {
        ...state,
        data: action.data
      };

    default:
      return state;
  }
}
