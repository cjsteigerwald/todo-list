import React, { useState } from 'react';
import {
    CardTodoIncomplete,
    CardListItemHeader,
    CardListItemTodoText
} from './user-interface.js';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

// const moment = require('moment');
import moment from 'moment';

const TodoListItem = ( {todo, onRemovePressed, onCompletePressed, onEditPressed, onSavePressed, statusList} ) => {
    const {  text, dueDate, isComplete, editMode, dateComplete, status } = todo;    
    const [todoStatus, setTodoStatus] = useState(status);
    const [todoText, setTodoText] = useState(text);


    const setEditText = (e) => {
        setTodoText(e.target.textContent)
    }

    const handleEditSave = () => { 
        onSavePressed(todoText, todoStatus);
    }

    return (
        <> 
            <CardTodoIncomplete    className='rounded mb-1 border mt-3 mx-auto'>
                <CardListItemHeader status={status} >{status}</CardListItemHeader>
                <CardTodoIncomplete.Body >
                    <CardListItemTodoText contenteditable={editMode ? 'true' : 'false'}
                        editMode={editMode}
                        onBlur={e => setEditText(e)}
                    >{todoText}</CardListItemTodoText>
                    {/* <CardTodoIncomplete.Text>Created: {moment(dateCreated).format('MMM DD, YYYY')}</CardTodoIncomplete.Text> */}
                    <CardTodoIncomplete.Text>Due Date: {moment(dueDate).format('MMM DD, YYYY')}</CardTodoIncomplete.Text>
                    {isComplete
                        ? <CardTodoIncomplete.Text>Date Complete: {moment(dateComplete).format('MMM DD, YYYY')}</CardTodoIncomplete.Text>
                        : null
                    } 
                    {editMode 
                        ?
                        <Row>
                            <Col md={3} >
                                <label className=" " htmlFor='Status'>
                                Status
                                </label>
                            </Col>
                            <Col md={9}>
                                <DropdownButton
                                    title={todoStatus}
                                    onSelect={e => setTodoStatus(e)}
                                > 
                                    {statusList.map((chooseStatus, index) => 
                                        <Dropdown.Item
                                            key={index}
                                            eventKey={chooseStatus}>{chooseStatus}</Dropdown.Item>
                                    )}
                                </DropdownButton>

                            </Col>
                        </Row>
                        : null
                    }
                     
                </CardTodoIncomplete.Body>
                <CardTodoIncomplete.Footer>
                    {isComplete
                        ?
                        <Button className='btn btn-danger mx-1'
                                    onClick={() => onRemovePressed(text)}>Delete</Button>
                        :
                        <div>
                            {editMode
                                ? 
                                <div className='btn-group'>
                                    <Button className='btn mx-1 btn-success' onClick={() => handleEditSave(todoText)}>Save</Button>
                                    <Button className='btn mx-1 btn-danger' onClick={() => onSavePressed(text)}>Discard</Button>
                                </div>
                                :
                                <div className='btn-group'>
                                    {/* If todo is complete do not show Complete Button */}
                                    {isComplete ? null 
                                    : <Button className='btn btn-success mx-1'
                                            onClick={() => onCompletePressed(text)}>Complete</Button>
                                    }
                                    <Button className='btn btn-primary mx-1' onClick={() => onEditPressed(text)}>Edit</Button>
                                    <Button className='btn btn-danger mx-1'
                                            onClick={() => onRemovePressed(text)}>Delete</Button>
                                </div>
                            }
                        </div>
                    }
                    
                </CardTodoIncomplete.Footer>
            </CardTodoIncomplete>
            
        </>
  
    )
}

export default TodoListItem