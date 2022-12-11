import { useState } from "react";

function Addtdl ({addTdl}){

    const [tdl, setTdl] = useState({
        todolist: "",
        date: "",
    })

    const handleChange = (event) => {
        setTdl({...tdl, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(tdl);
        setTdl({todolist: "", date: ""})
    }

    return(
        <form className='topform' onSubmit={handleSubmit}>
          <label htmlFor="todolist">To-do</label>
          <input type="text" placeholder="To-do List" name="todolist" value={tdl.todolist} onChange={handleChange}/>
          <label htmlFor="date">Date</label>
          <input type="text" placeholder="Date" name="date" value={tdl.date} onChange={handleChange}/>
          <button type="submit">Add</button>
        </form>
    )
}

export default Addtdl