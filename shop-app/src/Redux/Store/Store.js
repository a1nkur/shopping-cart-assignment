import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";


const reducer = combineReducers({
//   subCategoryList: subCategoryListReducer,

});

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

// const middleware = [thunk];

const initialState = {
  userSignIn: { userInfo: userInfoFromStorage },
};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
