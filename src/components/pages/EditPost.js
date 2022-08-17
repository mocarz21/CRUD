import { useDispatch } from 'react-redux';
import PostForm from '../features/PostForm';
 import postEdit from '../../redux/store'
 import { useParams} from 'react-router'

const EditPost =()=>{

    const dispatch = useDispatch()

    const onEditPost = (params) =>{
        dispatch(postEdit(params))

    }
    

    return(
        <>
            <h1>EditPost</h1>
            <PostForm action={onEditPost} actionText={'Edit post'}/>
        </>
    )
 }

 export default EditPost