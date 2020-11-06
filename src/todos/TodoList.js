import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import { 
    removeTodo,
    todoComplete,
    todoEditMode,
    todoSaveEdit,
    } from './actions';
import { 
         TodoHeader, 
        } from './user-interface';
import AddTodoForm from './AddTodoForm';

const TodoList = ( { todos = [], onRemovePressed, onCompletePressed, onEditPressed, onSavePressed }) => {
    const statusList = ['Not Started', 'Complete', 'In Progress'];

    return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col text-center'>
                            <TodoHeader>Pending</TodoHeader>
                            <AddTodoForm statusList={statusList}/>
                            
                            {/*Adding Todo List Item(s) */}
                             {todos.map((todo, index) => <TodoListItem 
                                todo={todo}
                                statusList={statusList}
                                onRemovePressed={onRemovePressed}
                                onCompletePressed={onCompletePressed}
                                onEditPressed={onEditPressed}
                                onSavePressed={onSavePressed}
                                key={index}
                            />
                            )}
                        </div>
                    </div>
                </div>
            </>
    )
}

// Below gives access to React Store

// Maps the state Object to props then passed in as state to AddTodoForm ()
const mapStateToProps = state => ({
    todos: state.todos,
});

// Instead of taking redux state it takes dispatch, allows redux actions to be triggered
// import actions from './actions'
// will dispatch action 
// add actions to be passed in to AddTodoFrom
const mapDispatchToProps = dispatch => ({
    onRemovePressed: (text) => dispatch(removeTodo(text)),
    onCompletePressed: (text, dueDate, status) => dispatch(todoComplete(text, dueDate, status)),
    onEditPressed: (text) => dispatch(todoEditMode(text)),
    onSavePressed: (text,status) => dispatch(todoSaveEdit(text, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);