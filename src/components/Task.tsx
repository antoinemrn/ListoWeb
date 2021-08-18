import styled from 'styled-components';
import TaskModel from '../models/task';
import ProgressBar from './ProgressBar';
import Tag from './Tag';



const Task = ({...task} : TaskModel) => 
{    
    return ( 
    <TaskContainer>
        <TaskTitle>{task.name}</TaskTitle>
        <TaskDescription>{task.description}</TaskDescription>
        <TaskDuration><b>{task.duration}</b> minutes left</TaskDuration>
        <ProgressBar completed={task.progress} color="#ffff00" shadow="#ffff00"></ProgressBar><br/>
        <div>{task.tags.map(x => <Tag name={x} key={x}></Tag>)}</div>
    </TaskContainer> );
}


const TaskContainer = styled.div`
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  border-radius: 5px;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
    backdrop-filter: blur(0px);
  }
`;

const TaskTitle = styled.div`
    font-weight: bold;
    color: white;
`;

const TaskDescription = styled.div`
    font-style: italic;
    font-size: 0.8em;
    color: #c2c2c2;  
`;

const TaskDuration = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    color : white;
`;
export default Task;