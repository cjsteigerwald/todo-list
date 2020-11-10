import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import moment from 'moment'


export const TodoHeader = styled.h1 `
    font-size: 2.5em;
`;

export const CardTodoIncomplete = styled(Card)`    
    width: 20rem;    
`;

export const CardListItemHeader = styled(Card.Header)`  
    background: ${props => {
        switch(props.status) {
            case 'Not Started':{
                return moment(props.duedate).format('MMM DD, YYYY') < moment(Date.now()).format('MMM DD, YYYY') ? 'red' : 'purple';
                }
            case 'In Progress': {
                return moment(props.duedate).format('MMM DD, YYYY') < moment(Date.now()).format('MMM DD, YYYY') ? 'red' : 'indigo';
            }
            case 'Complete': {                
                return moment(props.datecomplete).format('MMM DD, YYYY') === moment(Date.now()).format('MMM DD, YYYY') ? 'blue' : 'green'
            }
               
            default:
                return 'yellow'
        }
    }
       
     };
    color: white;
`;

export const CardListItemTodoText = styled(Card.Text)`    
   
`;


export const CardTodoComplete = styled(Card)`
    
`;

export const AddTodoButton = styled(Button)`
`;

