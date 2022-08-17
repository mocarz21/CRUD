
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/store'
import PostForm from './PostForm';

const AddPostForm =()=> {



 const dispatch = useDispatch()

    const addPosts= (params) =>{
        dispatch(addPost(params))

    }

    return(

        <PostForm action={addPosts} actionText={'Add Post'}/>
    )

}

export default AddPostForm;