import React from 'react';
import styled from 'styled-components';
import TaskModel from '../models/task';
import HeaderTaskList from './HeaderTaskList';
import Task from './Task';


interface TaskListContainerModel{
    title : string,
    tasks : TaskModel[]
}

const TaskListContainer = ({title, tasks} : TaskListContainerModel) => {
    return (
        <div>
            <HeaderTaskList title={title} nbTodos={tasks.length}/>
            <TaskList>
                {tasks.map( (x : TaskModel) => <Task {...x} key={x.id}></Task>)}
            </TaskList>
        </div>
    )
}

const TaskList = styled.div`
  display: grid;
  grid-auto-flow: rows;
`;

export default TaskListContainer
