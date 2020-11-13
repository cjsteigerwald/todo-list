import { createSelector } from 'reselect';

export const getTodos = state => state.todos.data;

export const getTodosLoading = state => state.todos.isLoading;

export const getNotStartedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.status === 'Not Started'),
);

export const getInProgressTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.status === 'In Progress'),
);

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.status === 'Complete'),
);