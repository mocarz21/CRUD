import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useParams} from 'react-router'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const PostForm = ({action, actionText, ...props}) =>{    {/*czemu te ... przed props */}

    const post = props.post || {}
    const [title, setTitle]= useState(post.title || ''); 
    const [author, setAuthor]= useState(post.author || '');
    const [published, setPublished]= useState(post.publishedDate || '');
    const [description, setDescription] =useState(post.shortDescription || '');
    const [content, setContent]= useState(post.content || '')
    const {id} =useParams();

    const runSubmit = e =>{
        e.preventDefault();
        action({title,author,published,description,content,id});
        setTitle('')
        setAuthor('')
        setPublished('')
        setDescription('')
        setContent('')
    }


    return(
    <Form onSubmit={runSubmit} className="center col-md-5 mx-auto">
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Title</Form.Label>
            <Form.Control style={{ width: '350px' }} id="disabledTextInput" value= {title} onChange={e=> setTitle(e.target.value)}/> 
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Author</Form.Label>
            <Form.Control style={{ width: '350px' }} id="disabledTextInput"  value= {author} onChange={e=>setAuthor(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Published</Form.Label>
            <Form.Control style={{ width: '350px' }} id="disabledTextInput" value= {published} onChange={e=>setPublished(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Short Descriptin</Form.Label>
            <Form.Control style={{ width: '800px', minHeight: '100px' }}id="disabledTextInput" value= {description} onChange={e=>setDescription(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">content</Form.Label>
            <ReactQuill style={{ width: '800px', minHeight: '100px' }} value= {content} onChange={e=>setContent(e.target.value)}/>
        </Form.Group>
        <Button type="submit">{actionText}</Button>
    </Form>
    )

}

export default PostForm;