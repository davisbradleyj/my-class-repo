import React, { useReducer, useContext } from "react";
import {GET_POSTS, UPDATE_POSTS, ADD_POST, REMOVE_POST, SET_CURRENT_POST, SAVING_POST } from "actions"
// Don't forget to import all of your actions!

// reducer - pure function, 
const reducer = (state, action) => {
  switch (action.type) {
    
    case GET_POSTS:
      return state.Posts;
    
      case UPDATE_POSTS:
      return {
        ...state, 
        posts: [...action.posts],
      }
    
      case ADD_POST:
      // when adding post, we want everything from state
      // then we want to overwrite with a post with all previous
      // posts and add any new post.  Returned as an object
      return {
        ...state, 
        post: [
          //updated order
        action.post, ...state.posts
        ]
        }
    case REMOVE_POST:
      return { 
      // needed to return an object with state
     ...state, 
        posts: state.posts.filter(() => {
        return index !== action.index;
        })
    });
    case SET_CURRENT_POST:
      return {
        ...state, currPost: [
          action.post[0]
          // loading: false
        ]
      }

    case SAVING_POST:
      return {...state,
      loading:true
    }
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: value,
    currPost: {
      _id: 0,
      title: "",
      body: "",
      author: ""
    },
    favPosts: []
  });

  return <Provider value={[state,dispatch]}{...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext)
};

export default { StoreProvider, useStoreContext };
