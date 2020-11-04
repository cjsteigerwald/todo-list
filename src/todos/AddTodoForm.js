import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';
import {
    AddTodoButton
} from './user-interface.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const AddTodoForm = ( { todos, onCreatePressed } ) => {
    // const { text, dateCreated, isComplete } = todo;
    // const [showAddTodoForm, setshowAddTodoForm] = useState;
    const [showForm, setShowForm] = useState(false);
    const [todoText, setTodoText] = useState('');
    const [dueDate, setDueDate] = useState('');
   
    const handleClose = () => setShowForm(false);

    const handleAddTodo = () => {
        // Check for duplicate todo text 
        const isDuplicateText = 
            todos.some(todo => todo.text === todoText);
        if (!isDuplicateText){
            onCreatePressed(todoText, dueDate);
            setTodoText('');
            setShowForm(false);
            setDueDate('');
        }
    }
    // const handleShow = () => setShow(true);
    return (
        <> 
            <AddTodoButton
                className='btn btn-primary' 
                onClick={e => setShowForm(true)}
                >Add Todo
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
                    <Row>
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
                    <Row>
                        <Col md={3} >
                            <label className=" " htmlFor="aptNotes">
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
                                onChange={e => setDueDate(e.target.value)}
                            />
                        </Col>
                    </Row>
            </Container>
            
                    
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" 
                onClick={handleClose}
            >
                Close
            </Button>
            <Button variant="primary"
                onClick={handleAddTodo}
            >New Todo</Button>
            </Modal.Footer>
        </Modal>
        </>
  
    )
}

// Below gives access to React Store

// Maps the state Object to props then passed in as todos to AddTodoForm ()
const mapStateToProps = state => ({
    todos: state.todos,
});

// Instead of taking redux state it takes dispatch, allows redux actions to be triggered
// import actions from './actions'
// will dispatch action 
// add actions to be passed in to AddTodoFrom
const mapDispatchToProps = dispatch => ({
    onCreatePressed: (text, dueDate) => dispatch(createTodo(text, dueDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)