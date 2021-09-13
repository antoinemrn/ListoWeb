import styled from 'styled-components';
import {TiPencil} from 'react-icons/ti';


import TaskModel from '../models/todo';
import ProgressBar from './ProgressBar';
import Tag from './Tag';



interface TaskViewProps {
    task : TaskModel;
    handleEdit() : void;
}

const TaskView = ({task, handleEdit}: TaskViewProps) => {

    const handleEditClick = () => {
        handleEdit();
    }

    return (
        <>
            <TaskHeader>
                <div><TaskTitle>{task.name}</TaskTitle></div>
                <TiPencil size={20} onClick={handleEditClick}/>
            </TaskHeader>
            <TaskDescription>{task.description}</TaskDescription>
            <TaskDuration><b>{task.timeLeft}</b> minutes left</TaskDuration>
            <ProgressBar completed={task.duration - task.timeLeft} total={task.duration} color="#ffff00" shadow="#ffff00"></ProgressBar><br/>
            <div>{task.tags.map(x => <Tag name={x} key={x}></Tag>)}</div>
        </>
    )
}

const TaskHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;  
    & > svg {
        height: 100%;
        color: #dc143c92;
    }
    & > svg:hover {
        height: 100%;
        color: #dc143c;
        cursor: pointer;
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
    max-width: 100%;
    max-height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TaskDuration = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    color : white;
`;

export default TaskView;