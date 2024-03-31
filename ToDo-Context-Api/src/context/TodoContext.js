import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoTitle: "TOdo MEssage",
            completed: false
        }
    ],
    // Functionality Methods and values
    addTodo: (todoTitle) => {},
    deleteTodo: (id) => {},
    updateTodo: (todoTitle, id) => {},
    todoComplete: (id) => {}

})

export const useTodo = () => {
    return(
        useContext(TodoContext)
    )
}

export const TodoProvider = TodoContext.Provider;
