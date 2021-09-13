import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Events from '../components/Events';
import TaskListContainer from '../components/TaskListContainer';
import TodoModel from '../models/todo';



const MainScreen = ()  => 
{
    const [tasks, setTasks] = useState<TodoModel[]>();

    useEffect(() => {
        async function getTodos() {
            await axios.get<TodoModel[]>("http://localhost:8080/api/todos")
                    .then((response) => 
                    {
                        console.log(response.data);
                        setTasks(response.data);
                    })
                    .catch((error) => console.log(error));
        };
        getTodos();
    }, []);

    return (
        <MainScreenContainer>
            
            <TaskScreenContainer>
            {tasks != null && 
                <>
                <TaskListContainer title={"Todos"} tasks={tasks!.filter(x => x.timeLeft === x.duration)}/>
                <TaskListContainer title={"In Progress"} tasks={tasks!.filter(x => x.timeLeft > 0 && x.timeLeft !== x.duration)}/>
                <TaskListContainer title={"Done"} tasks={tasks!.filter(x => x.timeLeft === 0)}/>
                </>
            }
            {
                tasks == null && <div>No tasks today come back tommorow</div>
            }
            
            </TaskScreenContainer>  
            
            <Events/>
        </MainScreenContainer>
    );
}
const MainScreenContainer = styled.div`
    display : grid;
    grid-template-columns: 1fr 20%;  
    height: 100%;
`;
const TaskScreenContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  padding : 20px
`;

export default MainScreen;