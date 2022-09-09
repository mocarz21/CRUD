import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import dateToStr from '../../utils/dateToStr'





const AllPosts =()=>{

    const posts = useSelector(state => state.posts)

    console.log(posts)
    return(
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
    )
}

export default AllPosts;