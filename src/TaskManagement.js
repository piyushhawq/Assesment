import React from 'react'
import { useState } from 'react'
import Model from './Model'

const TaskManagement = () => {
const [list,setList]= useState({

    
        tasks: [
          {
            "id": 1,
            "title": "Design homepage layout",
            "description": "Create wireframes and mockups for the homepage layout",
            "priority": "High",
            "dueDate": "2024-05-10",
            "status": "In Progress",
            "assignee": {
              "id": 101,
              "name": "John Doe",
              "email": "john.doe@example.com"
            }
          },
          {
            "id": 2,
            "title": "Implement login functionality",
            "description": "Develop login feature using React components and API integration",
            "priority": "Medium",
            "dueDate": "2024-05-15",
            "status": "Pending",
            "assignee": {
              "id": 102,
              "name": "Jane Smith",
              "email": "jane.smith@example.com"
            }
          },
          {
            "id": 3,
            "title": "Optimize database queries",
            "description": "Analyze and optimize SQL queries for better performance",
            "priority": "Low",
            "dueDate": "2024-05-20",
            "status": "To Do",
            "assignee": {
              "id": 103,
              "name": "Mike Johnson",
              "email": "mike.johnson@example.com"
            }
          }
        ]
      
      

})

const [showModel,setShowModel]= useState(false)

console.log("list",list.tasks.length)

function handelAddItem (){

setShowModel(!showModel)

}
  return (
<>

    <div>TaskManagement</div>

   <button on onClick={handelAddItem}>Add Item</button>
  { showModel && <Model/>}
<div>  


    <ul >
     
{/* { list.tasks.map((item ,i)=>{
  <li key ={i}>


<p>{item.title}</p>
 
<button on onClick={handelAddItem}>View Item</button>
<button on onClick={handelAddItem}>Edit Item</button>
<button on onClick={handelAddItem}>Delete Item</button>




</li>

})}*/}


<li>
    Task 1
    <button on onClick={handelAddItem}>View Item</button>
<button on onClick={handelAddItem}>Edit Item</button>
<button on onClick={handelAddItem}>Delete Item</button>
</li><li>
    Task 2
    <button on onClick={handelAddItem}>View Item</button>
<button on onClick={handelAddItem}>Edit Item</button>
<button on onClick={handelAddItem}>Delete Item</button>
</li><li>
    Task 3
    <button on onClick={handelAddItem}>View Item</button>
<button on onClick={handelAddItem}>Edit Item</button>
<button on onClick={handelAddItem}>Delete Item</button>
</li><li>
    Task 4
    <button on onClick={handelAddItem}>View Item</button>
<button on onClick={handelAddItem}>Edit Item</button>
<button on onClick={handelAddItem}>Delete Item</button>
</li><li>
    Task 5
    <button on onClick={handelAddItem}>View Item</button>
<button on onClick={handelAddItem}>Edit Item</button>
<button on onClick={handelAddItem}>Delete Item</button>
</li><li>
    Task 6
    <button on onClick={handelAddItem}>View Item</button>
<button on onClick={handelAddItem}>Edit Item</button>
<button on onClick={handelAddItem}>Delete Item</button>
</li>

      

    </ul>
</div>
    </>


  )
}

export default TaskManagement