import React from 'react'
import "./publi.css"

 function Publi({post}) {
  return (
    <div className='publicacao'>
        <div>
            <span className='nome'>{post.name}</span>
            <span className='time'>{post.time}</span>
        </div>
        <div>
            <p className='publi'>{post.content}</p>
        </div>
    </div>
  )
}

export default Publi;