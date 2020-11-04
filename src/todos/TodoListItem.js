import React from 'react';
import {
    CardTodoIncomplete
} from './user-interface.js';
import Button from 'react-bootstrap/Button';
// const moment = require('moment');
import moment from 'moment';

const TodoListItem = ( {todo, onRemovePressed} ) => {
    const { text, dateCreated, dueDate, isComplete } = todo;

    return (
        <> 
            <CardTodoIncomplete    className='rounded mb-1 border mt-3 mx-auto'>
                <CardTodoIncomplete.Header className='rounded bg-danger text-white' >Todo Item</CardTodoIncomplete.Header>
                <CardTodoIncomplete.Body >
                    <CardTodoIncomplete.Text>{text}</CardTodoIncomplete.Text>
                    <CardTodoIncomplete.Text>Created: {moment(dateCreated).format('MMM DD, YYYY')}</CardTodoIncomplete.Text>
                    <CardTodoIncomplete.Text>Due Date: {moment(dueDate).format('MMM DD, YYYY')}</CardTodoIncomplete.Text>
                    {/* <Card.Text>{isComplete}</Card.Text>  */}
                </CardTodoIncomplete.Body>
                <CardTodoIncomplete.Footer>
                    <div className='btn-group'>
                        <Button className='btn btn-primary mx-1'>Complete</Button>
                        <Button className='btn btn-danger mx-1'
                                onClick={() => onRemovePressed(text)}>Delete</Button>
                    </div>
                </CardTodoIncomplete.Footer>
            </CardTodoIncomplete>
            
        </>
  
    )
}

export default TodoListItem