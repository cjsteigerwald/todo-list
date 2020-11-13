import React from 'react';
import { connect } from 'react-redux';
import { getTodos } from './selectors'; 

import {
    CardTodoIncomplete,
    CardListItemHeader,
    CardListItemTodoText
} from './user-interface.js';
import Button from 'react-bootstrap/Button';
import EditTodoForm from './EditTodoForm';

// const moment = require('moment');
import moment from 'moment';

const TodoListItem = ( {todo, onRemovePressed, onCompletedPressed, onEditPressed, onSavePressed, statusList} ) => {
    const {  text, dueDate, isComplete, editMode, dateComplete, status, id } = todo;   
    const handleEdit = () => {
        onEditPressed(text)  
    }

   
    return (
        <> 
       
        <div className='col text-center'> 
           {editMode ? <EditTodoForm todo={todo} statusList={statusList}/> : null} 
            <CardTodoIncomplete    className='rounded mb-1 border mt-3 mx-auto'>
                <CardListItemHeader status={status}
                                    datecomplete={dateComplete}
                                    duedate={dueDate}
                 >{status}</CardListItemHeader>
                <CardTodoIncomplete.Body >
                    <CardListItemTodoText 
                        datecomplete={dateComplete} 
                        >{text}</CardListItemTodoText>
                    {/* <CardTodoIncomplete.Text>Created: {moment(dateCreated).format('MMM DD, YYYY')}</CardTodoIncomplete.Text> */}
                    <CardTodoIncomplete.Text>Due Date: {moment(dueDate).format('MMM DD, YYYY')}</CardTodoIncomplete.Text>     
                    {isComplete
                        ? <CardTodoIncomplete.Text>Date Complete: {moment(dateComplete).format('MMM DD, YYYY')}</CardTodoIncomplete.Text>
                        : null
                    } 
                </CardTodoIncomplete.Body>
                <CardTodoIncomplete.Footer>
                    <div className='btn-group'>
                    <Button className='btn btn-danger mx-1'
                            onClick={() => onRemovePressed(id)}>Delete</Button>
                    {!isComplete
                        ?
                        <>
                            
                            <Button className='btn btn-success mx-1'
                                    onClick={() => onCompletedPressed(id)}>Complete</Button>
                            
                            <Button className='btn btn-primary mx-1' onClick={() => handleEdit()}>Edit</Button>
                            </>
                        : 
                          null                        
                    }
                    </div>
                </CardTodoIncomplete.Footer>
            </CardTodoIncomplete>
            </div>  
        </>
    )
}

// Maps the state Object to props then passed in as todos to AddTodoForm ()
const mapStateToProps = state => ({
    todos: getTodos(state),
});

export default connect(mapStateToProps, null)(TodoListItem)