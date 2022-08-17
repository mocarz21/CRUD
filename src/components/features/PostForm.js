import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const PostForm = ({action, actionText}) =>{

    const [title, setTitle]= useState('');
    const [author, setAuthor]= useState('');
    const [published, setPublished]= useState('');
    const [description, setDescription] =useState('');
    const [content, setContent]= useState('')


    const runSubmit = e =>{
        e.preventDefault();
        action({title,author,published,description,content});
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
            <Form.Control style={{ width: '350px' }} id="disabledTextInput" value= {title} onChange={e=> setTitle(e.target.value)}/> {/*Wytłumaczyc dokładnie preventDefault jakdokładnie działa wmomecie jak mamy funkcje kiedy ona blokuje odswiezanie czy te np: e musi bycwczesniej przekazan czy nie */}
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
            <Form.Label htmlFor="disabledTextInput">Main content</Form.Label>
            <Form.Control style={{ width: '800px', minHeight: '200px' }}id="disabledTextInput" value= {content} onChange={e=>setContent(e.target.value)}/>
        </Form.Group>

        <Button type="submit">{actionText}</Button>
    </Form>
    )

}

export default PostForm;