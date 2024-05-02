import React, { useState } from 'react'

const Model = () => {
    const [items,setItems] = useState({});
    const [title,setTitle] = useState("")
    const [description,setDescriptio] = useState("")
    const [deadline,setDeadline] = useState("")
    const [priority,setPriority] = useState("")   
 function handleChange(e){
    setTitle(e.target.value)
 }
 function handleChange1(e){
    setDescriptio(e.target.value)
 }
 function handleChange2(e){
    setDeadline(e.target.value)
 }
 function handleChange3(e){
    setPriority(e.target.value)
 }

 function handelSubmit(){
    setItems(priority,deadline,description,title)
 }

 console.log("items",items)
  return (
<>
<div>Model</div>
<input type= "text" lable = "Title" name='title' value ={title} onChange={handleChange}/>
<input type= "text" lable = "Description" name='description' value ={description} onChange={handleChange1}/>
<input type= "text" lable = "Deadline" name='deadline' value ={deadline}onChange={handleChange2}/>
<input type= "text" lable = "Priority" name='priority' value ={priority} onChange={handleChange3}/>
<br/>
<button onClick={handelSubmit}>Submit</button>


</>
  )
}

export default Model