import { CREATE_TODO, 
         REMOVE_TODO,
         TODO_COMPLETE,
         TODO_EDIT_MODE,
         TODO_SAVE_EDIT,
         LOAD_TODOS_IN_PROGRESS,
         LOAD_TODOS_SUCCESS,
         LOAD_TODOS_FAILURE,
         DISCARD_EDIT_MODE,
         } from './actions';

export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case LOAD_TODOS_IN_PROGRESS:
            return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }
}



export const todos = (state = [], action) => {
    
    const { type, payload } = action;
    
    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return state.concat(todo);
        }
        case REMOVE_TODO: {
            const { todo: todoToRemove } = payload;
            return state.filter(todo => todo.id !== todoToRemove.id);
        }
        case TODO_COMPLETE: {
            const { todo: completedTodo } = payload;
            return state.map(todo => {
                if (todo.id === completedTodo.id) {
                    return { ...completedTodo };
                }
                return todo;
            })
        }
        case TODO_EDIT_MODE: {
            const { text } = payload;
            return state.map(todo => {
                if (todo.text === text) {
                    return { ...todo, editMode: true}
                }
                return todo;
            })
        }
        case TODO_SAVE_EDIT: {
            const { todo: editedTodo } = payload;
            return state.map(todo => {
                if (todo.id === editedTodo.id) {
                    return { ...editedTodo}
                }
                return todo;
            })
        }
        case DISCARD_EDIT_MODE: {
            const { id } = payload;
            return state.map(todo => {
                if (todo.id === id) {
                    return { ...todo, editMode: false}
                }
                return todo;
            })
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return todos;
        }
        case LOAD_TODOS_IN_PROGRESS: 
        case LOAD_TODOS_FAILURE: 
        default:
            return state;
    }
    
}