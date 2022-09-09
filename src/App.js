import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Article from  './components/pages/Article'
import AddPost from './components/pages/AddPost'
import EditPost from './components/pages/EditPost'
import NotFound from './components/pages/NotFound'
import Footer from './components/views/Footer'
import Header from './components/views/Header'
import Category from './components/pages/Category'

function App() {
  return (
          <>
            <Header/>
            <Routes>
              <Route path ="/" element={<Home/>} />
              <Route path ="/about" element={<About/>} />
              <Route path ="/category" element={<Category/>} />
              <Route path = "/post/:id" element={<Article/>} />
              <Route path = "/post/add" element={<AddPost/>} />
              <Route path = "/post/edit/:id" element={<EditPost/>} />
              <Route path = "*" element ={<NotFound/>} />
            </Routes>
            <Footer/>
          </>
  );
}

export default App;
