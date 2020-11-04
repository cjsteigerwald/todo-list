import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import { removeTodo } from './actions';
import { 
         TodoHeader, 
        } from './user-interface';
import AddTodoForm from './AddTodoForm';

const TodoList = ( { todos = [], onRemovePressed }) => {

    return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col text-center'>
                            <AddTodoForm />
                            <TodoHeader>Todo List</TodoHeader>
                            
                            {/* Adding Todo List Item(s) */}
                            {todos.map((todo, index) => <TodoListItem 
                                todo={todo}
                                onRemovePressed={onRemovePressed}
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
    onRemovePressed: (text, dueDate) => dispatch(removeTodo(text, dueDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);