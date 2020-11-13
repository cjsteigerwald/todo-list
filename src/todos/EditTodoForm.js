import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './selectors'; 
import { editTodoRequest, discardEditRequest } from './thunks';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import moment from 'moment';




const EditTodoForm = ( { todo, statusList, onEditPressed, onDiscardPressed } ) => {
    const {  text,  editMode, status, dueDate, id } = todo;
    
    const [todoText, setTodoText] = useState(text);
    const [todoDueDate, setTodoDueDate] = useState(dueDate);
    const [todoStatus, setTodoStatus] = useState(status);   
    const handleDiscard = () => {
        onDiscardPressed(id);
        setTodoText('');
        setTodoDueDate('');
        setTodoStatus('');
    };
    
    const handleEditAddTodo = () => {       
        onEditPressed(todoText, todoDueDate, todoStatus, id);
        setTodoText('');
        setTodoDueDate('');
        setTodoStatus('');
    }
    
    return (        
        <>            
            <Modal
            show={editMode}
            // onHide={handleDiscard}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header>
            <Modal.Title>Edit Todo</Modal.Title>
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
                                value={todoDueDate}
                                onChange={e => moment(setTodoDueDate(e.target.value)).format('MMM DD, YYYY')}
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
                    onClick={handleDiscard}
                >Discard</Button>
                <Button className='btn mx-1 btn-success'
                    onClick={handleEditAddTodo}
                >Save</Button>
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
    onEditPressed: (text, dueDate, status, id) => dispatch(editTodoRequest(text, dueDate, status, id)),
    onDiscardPressed: id => dispatch(discardEditRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoForm)