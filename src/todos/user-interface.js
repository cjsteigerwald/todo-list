import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
                return 'red'
                }
            case 'In Progress': {
                return 'purple'
            }
            case 'Complete': {
                return 'green'
            }
            default:
                return 'yellow'
        }
    }
       
     };
    color: white;
`;

export const CardListItemTodoText = styled(Card.Text)`
    border: ${props => (props.editMode ? '1px solid green' : '') };
`;


export const CardTodoComplete = styled(Card)`
    
`;

export const AddTodoButton = styled(Button)`
`;