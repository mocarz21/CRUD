import CategoryList from './CategoryList'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useParams} from 'react-router'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const PostForm = ({action, actionText, ...props}) =>{

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const post = props.post || {}
    const [title, setTitle]= useState(post.title || ''); 
    const [author, setAuthor]= useState(post.author || '');
    const [published, setPublished]= useState(post.publishedDate || '');
    const [description, setDescription] =useState(post.shortDescription || '');
    const [content, setContent]= useState(post.content || '');
    const [dateError, setDateError] = useState(false);
    const [contentError, setContentError] = useState(false);
    const [category, setCategory] =useState('')
    const {id} =useParams();
    let navigate = useNavigate();

    const categorys =useSelector(store => store.posts.map(post=>post.category))
    const filtredCategorys = categorys.filter(function (x, i, a) { 
        return a.indexOf(x) === i; 
    });

    console.log('category',category)

    const runSubmit = e =>{
        setContentError(!content)
        setDateError(!published)
        if(content && published){
            action({title,author,published,description,content,id,category});
            setTitle('')
            setAuthor('')
            setPublished('')
            setDescription('')
            setContent('')  
            navigate('/');
            //window.location.href = "/";
        }

        
    }

    return(
    <Form onSubmit={validate(runSubmit)} className="center col-md-5 mx-auto">
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Title</Form.Label>
            <Form.Control 
                {...register("title", {required: true, minLength: 3})} style={{ width: '350px' }} id="disabledTextInput" value= {title} onChange={e=> setTitle(e.target.value)}
            /> 
                {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Author</Form.Label>
            <Form.Control 
                {...register("author", {required: true, minLength: 3})} style={{ width: '350px' }} id="disabledTextInput"  value= {author} onChange={e=>setAuthor(e.target.value)}
            />
                {errors.author && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Published</Form.Label>
            <DatePicker dateFormat="dd/MM/yyyy" selected={published} onChange={(date) => setPublished(date)} />
            {dateError && <small className="d-block form-text text-danger mt-2">Published can't be empty</small>}
        </Form.Group>
        <Form.Label htmlFor="disabledTextInput">Category</Form.Label>
        
        <Form.Select aria-label="Default select example" onChange={select=>setCategory(filtredCategorys[select.target.value])}>
            <option>Open this select menu</option>
            {filtredCategorys.map((category, index) =><option key={index} value={index}>{category}</option>)}
        </Form.Select>
        
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Short Descriptin</Form.Label>
            <Form.Control 
                {...register("description", {required: true, minLength: 20})} style={{ width: '800px', minHeight: '100px' }}id="disabledTextInput" value= {description} onChange={e=>setDescription(e.target.value)}
            /> 
                {errors.description && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">content</Form.Label>
            <ReactQuill style={{ width: '800px', minHeight: '100px' }} value= {content} onChange={content=>setContent(content)}/>
            {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
        </Form.Group>
        <Button  type="submit">{actionText}</Button>
    </Form>
    )

}
export default PostForm;