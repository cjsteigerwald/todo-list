import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodos, getTodosLoading } from './selectors'; 
import { loadTodos } from './thunks';
import BuildTable from './BuildTable';
import { 
         TodoHeader, 
        } from './user-interface';
import AddTodoForm from './AddTodoForm';



// import Table from 'react-bootstrap/Table';


const TodoList = ( { todos = [], isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const statusList = ['Not Started', 'In Progress', 'Complete'];
    
    const loadingMessage = <div>Loading todos...</div>
    const content = (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col text-center'>
                            <TodoHeader>Todo List</TodoHeader>                            
                            <AddTodoForm statusList={statusList} />
                            <BuildTable statusList={statusList}/>
                        </div>
                    </div>
                </div>
            </>
    );

    return isLoading ? loadingMessage : content;
}

// Below gives access to React Store

// Maps the state Object to props then passed in as state to AddTodoForm ()
const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    todos: getTodos(state),
});

// Instead of taking redux state it takes dispatch, allows redux actions to be triggered
// import actions from './actions'
// will dispatch action 
// add actions to be passed in to AddTodoFrom
const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),    
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);