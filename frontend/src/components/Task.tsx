import { useState } from 'react';

import styled from 'styled-components';

import TaskModel from '../models/todo';
import TaskEdit from './TaskEdit';
import TaskView from './TaskView';


interface TaskProps {
    task : TaskModel;
    handleTaskEdit(data : TaskModel): void;
}



const Task = ({task, handleTaskEdit} : TaskProps) => 
{    
    const [mode, setMode] = useState("view");

    const handleClick = function(newState : string) { 
        setMode(newState);
    }

    const ViewToRender = mode === "view" ? 
        <TaskView task={task} handleEdit={() => handleClick("edit")}></TaskView> : 
        <TaskEdit task={task} handleCancel={() => handleClick("view")} handleTaskEdit={handleTaskEdit}></TaskEdit>
        
    return ( 
        <TaskContainer>            
            {ViewToRender}            
        </TaskContainer> 
    );
}




const TaskContainer = styled.div`
  padding: 10px;
  background: rgb(255, 255, 255);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  border-radius: 5px;
  margin-bottom: 20px; 
`;



export default Task;