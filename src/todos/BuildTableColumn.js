import React, { useState } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import {removeTodoRequest, discardEditRequest, completedTodoRequest} from './thunks';
import { 
    todoEditMode,
    todoSaveEdit,    
    } from './actions';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown } from 'react-bootstrap';


const BuildTableColumn = ( { todos = [], onRemovePressed, onCompletedPressed, onEditPressed, onSavePressed, statusList, status }) => {
    const [orderDir, setOrder] = useState('asc');

    const buildListItems = (status ) => {
    // Order based on ascending or descending
    let order;
    if (orderDir === 'asc'){
        order = 1;
    }else {
        order = -1;
    }

        return (           
            <>                
                {todos.sort((a,b) => {
                    if (a.dueDate < b.dueDate ) {
                        return -1 * order;
                    } else {
                        return 1 * order;
                    }                    
                })
                .filter(todo => todo.status === status)
                .map ((item, index) => <TodoListItem
                    todo={item}
                    statusList={statusList}
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                    onEditPressed={onEditPressed}
                    onSavePressed={onSavePressed}
                    key={index}
                /> 
                )}
            </>             
        )
    }

    return (
            <> 
                <td >
                    <DropdownButton 
                            title='Sort'
                            variant='primary'
                            size='sm'
                            className='mx-2'
                            onSelect={e => setOrder(e)}>
                                <Dropdown.Item eventKey='asc'>Asc</Dropdown.Item>
                                <Dropdown.Item eventKey='dsc'>Desc</Dropdown.Item>
                    </DropdownButton>
                    {buildListItems(status)}
                </td>    
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
    onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
    onCompletedPressed: (id) => dispatch(completedTodoRequest(id)),
    onEditPressed: (text) => dispatch(todoEditMode(text)),
    onDiscardPressed: id => dispatch(discardEditRequest(id)),
    onSavePressed: (text, dueDate, status) => dispatch(todoSaveEdit(text, dueDate, status)),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildTableColumn);