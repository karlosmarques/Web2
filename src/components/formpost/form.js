import "./form.css"
import { useRef } from "react";

 function Formpost({onPost}) {
  const textAreaRef = useRef()

  function handleSubmit(){
    
    onPost(textAreaRef.current.value)
    textAreaRef.current.value = []
    console.log(textAreaRef)
  }
  return (
  
    <div className="container-text-area">
      <div className="posts">
      <textarea 
        placeholder="O que está acontecendo?"
        ref={textAreaRef}
        />
        <button onClick={handleSubmit}>Diga algo</button>
      </div>
  
    </div>
  )
}

export default Formpost;
