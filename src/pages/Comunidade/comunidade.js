import React, { useState } from 'react'
import './style.css'
import Formpost from '../../components/formpost/form';
import {v4} from "uuid"
import Publi from '../../components/publi/publi';


function Comunidade() {

  const [posts,setPosts] = useState([])

  

  const addNovoPost = (content) => {
    const novoPost={
      id: v4(),
      name: "karlos",
      content,
      time:new Date().toDateString("pt-BR")
    }   
    setPosts((prevPost)=>[novoPost,...prevPost])
  }
  
 

  return (
    <div>
      <Formpost onPost={(content)=> addNovoPost(content)}/>
      <div>
        {posts.map(post =>(
          <Publi key={post.id} post ={post}/>
        ))}
        
      </div>
    </div>
  );
}

export default Comunidade;