import Container from 'react-bootstrap/Container';
import CategoryList from '../features/CategoryList';
import Card from 'react-bootstrap/Card';
import dateToStr from '../../utils/dateToStr'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

 const Category =()=>{

    const [input, setInput] =useState('')
    const posts =useSelector(store => store.posts.filter(post=>post.category === input))

    const inputContent = post => {

        
        setInput(post)
        console.log(input)
    }

    return(
        <>
            <Container className="d-flex justify-content-between">
                <h1>Category</h1>
            </Container>
            <CategoryList inputContent={inputContent} />
            <div className="d-flex justify-content-between flex-wrap">
            {posts.map(post=>    
                <Card key={post.id} style={{ width: '27rem', margin: '0.5rem'}}>
                    <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                        <h2>Author: {post.author}</h2>
                        <h2>Published: {dateToStr(post.publishedDate)}</h2>
                        <h2>Category: {post.category}</h2>
                        <h2>{post.shortDescription}</h2>
                    </Card.Text>
                    <Button  variant="primary" as={NavLink} to={'/post/'+ post.id}>Read More</Button>
                    </Card.Body>
                </Card>)}
            </div>
        </>
    )
 }

 export default Category;