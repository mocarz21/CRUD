import { useSelector } from "react-redux";
import Form from 'react-bootstrap/Form';
import { useState } from "react";


const CategoryList = props =>{

    const [categoryy, setCategory] =useState('')


    const categorys =useSelector(store => store.posts.map(post=>post.category))
    const filtredCategorys = categorys.filter(function (x, i, a) { 
        return a.indexOf(x) === i; 
    });

    props.inputContent(categoryy)

    //console.log('category',category)

    return  (
        <Form.Select aria-label="Default select example" onChange={select=>setCategory(filtredCategorys[select.target.value])}>
            <option>Open this select menu</option>
            {filtredCategorys.map((category, index) =><option key={index} value={index}>{category}</option>)}
        </Form.Select>
    )
       



}

export default CategoryList;