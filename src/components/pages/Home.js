import { Button } from "react-bootstrap"
import AllPosts from "../features/AllPosts"
import Container from 'react-bootstrap/Container';
 const Home =()=>{

    return(
        <>
        <Container className="d-flex justify-content-between">
        <h1>HOME</h1>
        <Button variant="outline-success" href="/post/add">Add post</Button>
        </Container>
        <AllPosts/>
        </>
    )
 }

 export default Home