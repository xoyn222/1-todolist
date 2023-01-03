import React from "react"

type TodolistPropsType = {
    header?: String,
    tasks: TaskType[];
}

type TaskType = {
    id: Number,
    title: String,
    isDone: Boolean;
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map(el=>{
                        return(
                            <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                        )
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
}
