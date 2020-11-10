export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = todo => ({
    type: CREATE_TODO,
    payload: { todo }
});

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = todo => ({
    type: REMOVE_TODO,
    payload: { todo }
});

export const TODO_COMPLETE = 'TODO_COMPLETE';

export const todoComplete = todo => ({
    type: TODO_COMPLETE,
    payload: { todo }
});

export const TODO_EDIT_MODE = 'TODO_EDIT_MODE';

export const todoEditMode = text => (    
    {
    type: TODO_EDIT_MODE,
    payload: { text }
});

export const DISCARD_EDIT_MODE = 'DISCARD_EDIT_MODE';

export const discardEditMode = id => (    
    {
    type: DISCARD_EDIT_MODE,
    payload: { id }
});

export const TODO_SAVE_EDIT = 'TODO_SAVE_EDIT';

export const todoSaveEdit = (todo) => (    
    {
    type: TODO_SAVE_EDIT,
    payload: { todo }
});



export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';

export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCESS';

export const loadTodosSuccess = todos => ({
    type: LOAD_TODOS_SUCCESS,
    payload: { todos },
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
});

