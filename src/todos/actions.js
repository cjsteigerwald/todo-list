export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = (text, dueDate) => ({
    type: CREATE_TODO,
    payload: { text, dueDate }
});

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text }
});


