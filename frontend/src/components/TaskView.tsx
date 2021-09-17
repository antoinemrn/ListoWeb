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
            <ProgressBar completed={task.duration - task.timeLeft} total={task.duration} colorStart="#92FFC0" colorEnd="#00af75"></ProgressBar><br/>
            <div>{task.tags.map(x => <Tag name={x} key={x}></Tag>)}</div>
        </>
    )
}

const TaskHeader = styled.div`
    display: grid;
    
    grid-template-columns: 1fr auto;  
    & > svg {
        height: 100%;
        color: #006946;
    }
    & > svg:hover {
        height: 100%;
        color: #00af75;
        cursor: pointer;
    }
`;

const TaskTitle = styled.div`
    font-weight: bold;
    color: black;    
`;

const TaskDescription = styled.div`
    font-style: italic;
    font-size: 0.8em;
    color: #a3a3a3;  
    max-width: 100%;
    max-height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TaskDuration = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    color : #000000;
`;

export default TaskView;