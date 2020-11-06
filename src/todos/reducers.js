import { CREATE_TODO, 
         REMOVE_TODO,
         TODO_COMPLETE,
         TODO_EDIT_MODE,
         TODO_SAVE_EDIT,
         } from './actions';

export const todos = (state = [], action) => {
    
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { text, dueDate,status } = payload;            
            const newTodo = {
                text: text,
                dateCreated: Date.now(),
                dueDate: dueDate,
                dateComplete: '',
                isComplete: false,
                editMode: false,
                status: status,
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
        case TODO_COMPLETE: {
            const { text } = payload;
            return state.map(todo => {
                if (todo.text === text) {
                    return { ...todo, isComplete: true, dateComplete: Date.now(), status: 'Complete'};
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
            const { text, status } = payload;
            return state.map(todo => {
                if (todo.editMode) {
                    console.log('Reducer: ', status)
                    return { ...todo, editMode: false, text: text, status: status}
                }
                
                return todo;
            })
        }
        
        default:
            return state;
    }
    
}