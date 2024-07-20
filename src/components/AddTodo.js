import React, { useState } from 'react'

const AddTodo = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit = (e) =>
    {
        e.preventDefault();
        if(!title || !desc)
        {
            alert('Title or Description cant be blank!!')
        }
    }
    return (
        <div className="container">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter yout task..." />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input type="text" value={desc} className="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="exampleInputPassword1" placeholder="describe task..." />
                </div>
                <button type="submit" className="btn my-3 btn-success">Add</button>
            </form>
        </div>
    )
}

export default AddTodo
