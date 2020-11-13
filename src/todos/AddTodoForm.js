import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './selectors'; 
import { addTodoRequest } from './thunks';
import {
    AddTodoButton
} from './user-interface.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import moment from 'moment';



const AddTodoForm = ( { todos, onCreatePressed, statusList } ) => {
    // const { text, dateCreated, isComplete } = todo;
    // const [showAddTodoForm, setshowAddTodoForm] = useState;
    const [showForm, setShowForm] = useState(false);
    const [todoText, setTodoText] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [todoStatus, setTodoStatus] = useState('');
   
    const handleClose = () => {
        setShowForm(false)
        setTodoText('');
        setShowForm(false);
        setDueDate('');
        setTodoStatus('');
    };
    
    const handleAddTodo = () => {
        onCreatePressed(todoText, dueDate, todoStatus);
        setTodoText('');
        setShowForm(false);
        setDueDate('');
        setTodoStatus('');
    }

    return (
        <> 
            <AddTodoButton
                className='btn btn-primary my-2' 
                onClick={e => setShowForm(true)}
                >New Todo
            </AddTodoButton>
            <Modal
            show={showForm}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
            <Modal.Title>New Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body className='show-grid'>
                <Container>
                    <Row className='mb-3'>
                        <Col md={3} >
                            <label className="text-md-right" htmlFor="TodoText">
                            Todo Notes
                            </label>
                        </Col>
                        <Col md={9}>
                            <textarea
                                className='form-control'
                                rows='4'
                                cols='50'
                                value={todoText}
                                onChange={e => setTodoText(e.target.value)}
                                />
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col md={3} >
                            <label className=" " htmlFor="Date Picker">
                            Due Date
                            </label>
                        </Col>
                        <Col md={9}>
                            <input 
                                type='date'
                                className='form-control'
                                name='dueDate'
                                id='dueDate'
                                value={dueDate}
                                onChange={e => moment(setDueDate(e.target.value)).format('MMM DD, YYYY')}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} >
                            <label className=" " htmlFor="Status">
                            Status
                            </label>
                        </Col>
                        <Col md={9}>
                            <DropdownButton
                                title={todoStatus ? todoStatus : 'Status'}
                                onSelect={e => setTodoStatus(e)}
                            > 
                                {statusList.map((status, index) => 
                                    <Dropdown.Item
                                    key={index}
                                        eventKey={status}>{status}</Dropdown.Item>
                                )}
                            </DropdownButton>
                            

                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
            <div className='btn-group'>
                <Button className='btn mx-1 btn-danger'
                    onClick={handleClose}
                >Close</Button>
                <Button className='btn mx-1 btn-success'
                    onClick={handleAddTodo}
                >New Todo</Button>
            </div>
            </Modal.Footer>
        </Modal>
        </>
  
    )
}

// Below gives access to React Store

// Maps the state Object to props then passed in as todos to AddTodoForm ()
const mapStateToProps = state => ({
    todos: getTodos(state),
});

// Instead of taking redux state it takes dispatch, allows redux actions to be triggered
// import actions from './actions'
// will dispatch action 
// add actions to be passed in to AddTodoFrom
const mapDispatchToProps = dispatch => ({
    onCreatePressed: (text, dueDate, status) => dispatch(addTodoRequest(text, status, dueDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)