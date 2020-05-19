import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_POST,
  REMOVE_POST,
  UPDATE_POSTS,
  ADD_POST,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;
// reducer is switch statement dependant on the case
// ie. for Set Post, it will return all previous elements of state
// then overwrite with the action (which is a post)
const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_POST:
    return {
      ...state,
      currentPost: action.post,
      loading: false
    };

  // update post will return all previous elements, overwrite a post 
  // with updated content  
  case UPDATE_POSTS:
    return {
      ...state,
      posts: [...action.posts],
      loading: false
    };
// add post will take state, overwrite existing state to add the actiom (a post
// and add the post to state
  case ADD_POST:
    return {
      ...state,
      posts: [action.post, ...state.posts],
      loading: false
    };
// take state, overwrite state, filtering on the selected post, and remove that
// designated post from the list
  case REMOVE_POST:
    return {
      ...state, 
      posts: state.posts.filter((post) => {
        return post._id !== action._id; 
      })
    };

  case ADD_FAVORITE:
    return {
      ...state,
      favorites: [action.post, ...state.favorites],
      loading: false
    };

  case UPDATE_FAVORITES:
    return {
      ...state,
      favorites: [...state.favorites],
      loading: false
    };

  case REMOVE_FAVORITE:
    return {
      ...state,
      favorites: state.favorites.filter((post) => {
        return post._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      // what does this mean? 
      // test later
      loading: true
    };

  default:
    return state;
  }
};

// 
const StoreProvider = ({ value = [], ...props }) => {
  // dispatch is a method that sends the result of an action
  // takes current status of page, and does something with the 
  // object data (post, currpost, etc) in the reducer switch statement
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPost: {
      _id: 0,
      title: "",
      body: "",
      author: ""
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
