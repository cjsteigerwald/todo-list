import { CREATE_TODO, REMOVE_TODO } from './actions';

export const todos = (state = [], action) => {
    
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { text, dueDate } = payload;
            const newTodo = {
                text: text,
                dateCreated: Date.now(),
                dueDate: dueDate,
                isComplete: false,
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
        default:
            return state;
    }
    
}