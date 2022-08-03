import React from 'react'
import { useState } from 'react'

function Form({addTodos, todos}) {
    const [form, setForm] = useState({ todo: "", active:true, })
    const [counter, setCounter] = useState(0)
    const onchangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, id:counter })
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(form)
        addTodos([...todos, form])
        setCounter(counter + 1)
    }
    return (
        <form>
            <input className='formInput' onChange={onchangeForm} name='todo' placeholder='What needs to be done?' />
            <img src={"add.png"} className="addButton" onClick={onSubmit}/>
        </form>
    )
}

export default Form