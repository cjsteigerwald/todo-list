import './App.css';
import styled from 'styled-components'
import TodoList from './todos/TodoList';

const AppContainerForm = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    width: 100vw;
    height: 100vh;
`;

function App() {

  const todos = [
    {
        userName: 'Chris',
        text: 'Testing text',
        dateCreated: '2/20/20',
        dueDate: '',
        isComplete: false,
    },
    {
        userName: 'Chris',
        text: 'Testing text2',
        dateCreated: '2/21/20',
        isComplete: false,
    }   
  ] 

  return (
    <AppContainerForm >
      <TodoList todos={todos}/>
    </AppContainerForm>
  );
}

export default App;
