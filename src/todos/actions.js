export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = (text, dueDate, status) => ({
    type: CREATE_TODO,
    payload: { text, dueDate, status }
});

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text }
});

export const TODO_COMPLETE = 'TODO_COMPLETE';

export const todoComplete = text => ({
    type: TODO_COMPLETE,
    payload: { text }
});

export const TODO_EDIT_MODE = 'TODO_EDIT_MODE';

export const todoEditMode = text => (    
    {
    type: TODO_EDIT_MODE,
    payload: { text }
});

export const TODO_SAVE_EDIT = 'TODO_SAVE_EDIT';

export const todoSaveEdit = (text, status) => (    
    {
    type: TODO_SAVE_EDIT,
    payload: { text, status }
});

