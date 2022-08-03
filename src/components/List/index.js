import React from 'react'
import "../../App.css"

function List({ todos, updateTodos }) {

    const onDone = (e) => {
        updateTodos(prevState => {
            const newState = prevState.map((uptodo, i) => {
                let updateId = parseInt(e.target.id, 10)
                if (uptodo.id === updateId) {
                    return { ...uptodo, active: false };
                }
                return uptodo;
            });
            return newState;
        });
    }
    const onRemove = (e) => {
        updateTodos(current =>
            current.filter(rmtodo => {
                let removeId = parseInt(e.target.name, 10)
                return rmtodo.id !== removeId;
            }),
        );
    };
    return (
<div>
            <ul className='list'>
                {todos.map((e, i) =>
                    <li className={e.active === true ? "activeTodo" : "notActiveTodo"}>
                        <img src={"check.png"} className={e.active === true ? "doneButton" : "finalDoneButton"} id={e.id} onClick={onDone} />{e.todo}
                        <img src={"delete.png"} className={e.active === true ? "deleteButton" : "finalDeleteButton"} name={e.id} onClick={onRemove}/></li>
                )}
                <li>{todos.length} items left</li>
            </ul>
        </div>
    )
}

export default List