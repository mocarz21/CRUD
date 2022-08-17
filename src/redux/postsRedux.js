import shortid from "shortid";

//selectors

// actions
const createActionName = actionName => `app/posts/${actionName}`;


// action creators
const postsReducer = (statePart = [], action) => {
  console.log(statePart)
  console.log('działa')
  switch (action.type) {
    case 'app/post/DELETE':
      return statePart.filter(post =>(post.id !== action.id));
    case 'app/post/ADD':
      return [...statePart, {...action, id: shortid()}]
    case 'app/post/EDIT':
      return statePart.find(post =>(post.id === action.id))
      default: 
      return statePart
  };

};

export default postsReducer;