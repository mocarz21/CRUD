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
      return statePart.map(post =>(post.id !== action.id));
    case 'app/post/ADD':
      return [...statePart, {...action, id: shortid()}]
      default: 
      return statePart
  };

};

export default postsReducer;