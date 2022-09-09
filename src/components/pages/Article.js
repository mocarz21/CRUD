import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import { useParams} from 'react-router'
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Navigate } from 'react-router-dom'
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import {deletePost} from '../../redux/store';
import { NavLink } from 'react-router-dom';
import dateToStr from '../../utils/dateToStr'

const Article =()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch =useDispatch();
    const {id} =useParams();
    
    const postData = useSelector(state => state.posts.find(list=>list.id===id))
    //({lists}, listId) => lists.find(list => list.id === listId)

    const onDeletePost = e =>{
        
        console.log('delete')
        dispatch(deletePost({id}));
        handleClose()

    
          
    }
 console.log("/post/edit/",id)
    if(!postData) return <Navigate to="/" />
        return(
            <div>
                <Container className="d-flex justify-content-between">
                    <h1>{postData.title}</h1>
                    <div  >
                        <Button variant="outline-success" as={NavLink} to={'/post/edit/' + id}>Edit</Button>
                        <Button variant="outline-success" onClick={handleShow}>Delete</Button>
                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={onDeletePost}>
                                    Delete
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Container>
                <Card  style={{ width: '30rem' }} >
                    <Card.Body>
                        <Card.Title  >{postData.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{postData.author}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{dateToStr(postData.publishedDate)}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{postData.category}</Card.Subtitle>
                        <Card.Text>
                            {postData.shortDescription}
                        </Card.Text>
                        <Card.Text>
                            {<p dangerouslySetInnerHTML={{ __html: postData.content }} />}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
 }

 export default Article