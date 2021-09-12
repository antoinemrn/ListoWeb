import React, { useState } from 'react';
import styled from 'styled-components';
import TaskModel from '../models/task';
import HeaderTaskList from './HeaderTaskList';
import Task from './Task';


interface TaskListContainerModel{
    title : string,
    tasks : TaskModel[]
}

const TaskListContainer = ({title, tasks} : TaskListContainerModel) => {


    const [taskList, setTaskList] = useState(tasks);

    const handleTaskEdit = (data : TaskModel) => {
        //eslint-disable-next-line
        const taskIndex = taskList.findIndex(x => x.id == data.id);
        let newTaskList = [...taskList];
        newTaskList[taskIndex] = {...newTaskList[taskIndex], ...data};
        setTaskList(newTaskList);
    }
    return (
        <div>
            <HeaderTaskList title={title} nbTodos={tasks.length}/>
            <TaskList>
                {taskList.map( (x : TaskModel) => <Task task={x} key={x.id} handleTaskEdit={handleTaskEdit}></Task>)}
            </TaskList>
        </div>
    )
}

const TaskList = styled.div`
  display: grid;
  grid-auto-flow: rows;
`;

export default TaskListContainer
