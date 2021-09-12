import styled from 'styled-components';
import Events from '../components/Events';
import TaskListContainer from '../components/TaskListContainer';
import TaskModel from '../models/task';

interface TaskState{
    tasks : TaskModel[];
}

const MainScreen = ({tasks} : TaskState)  => 
{
    return (
        <MainScreenContainer>
            <TaskScreenContainer>
                <TaskListContainer title={"Todos"} tasks={tasks.filter(x => x.timeLeft === x.duration)}/>
                <TaskListContainer title={"In Progress"} tasks={tasks.filter(x => x.timeLeft > 0 && x.timeLeft !== x.duration)}/>
                <TaskListContainer title={"Done"} tasks={tasks.filter(x => x.timeLeft === 0)}/>
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