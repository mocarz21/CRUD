import { useDispatch } from 'react-redux';
import PostForm from '../features/PostForm';
import { useParams} from 'react-router'
import { useSelector } from 'react-redux';
import { getPostData, postEdit } from '../../redux/store';



const EditPost =()=>{

    const dispatch = useDispatch()

    const onEditPost = (params) =>{
        dispatch(postEdit(params))

    }
    const {id} =useParams();

    const findPosts = useSelector(store => getPostData(store,id))    
    
    console.log('posts',findPosts)
    return(
        <>
            <h1>EditPost</h1>
            <PostForm action={onEditPost} actionText={'Edit post'} post={findPosts}/>
        </>
    )
 }

 export default EditPost