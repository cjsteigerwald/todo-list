import { loadTodosInProgress, 
         loadTodosSuccess, 
         loadTodosFailure,
         createTodo,
         removeTodo,
         todoComplete,
         discardEditMode,
         todoSaveEdit,
        } from './actions';


// dispatch dispatches to redux-store, getState gets current state of store
export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
    const response = await fetch('http://localhost:8080/todos');
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }

}

export const addTodoRequest = (text, status, dueDate) => async dispatch => {
    try {
        const body = JSON.stringify({
            text: text,
            status: status,
            dueDate: dueDate,
        });
        const response = await fetch('http://localhost:8080/todos',{
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body
        });

    const todo = await response.json();
    dispatch(createTodo(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete',
        })
        const removedTodo = await response.json();
        dispatch(removeTodo(removedTodo))
    } catch (e) {
        dispatch(displayAlert(e))
    }
}

export const completedTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
        });
        const completedTodo = await response.json();
        dispatch(todoComplete(completedTodo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const editTodoRequest = (text, dueDate, status, id) => async dispatch => {
    const body = JSON.stringify({
        text: text,
        dueDate: dueDate,
        status: status,
    })
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/update`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'put',
            body
        })
        const editedTodo = await response.json();
        dispatch(todoSaveEdit(editedTodo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const discardEditRequest = (id) => dispatch => {
    dispatch(discardEditMode(id));
}


export const displayAlert = text => () => {
    alert(text);
};