import styled from 'styled-components';
import {TiTick, TiTimes} from 'react-icons/ti';
import { SubmitHandler, useForm } from 'react-hook-form';

import TaskModel from '../models/task';
import ProgressBar from './ProgressBar';
import Tag from './Tag';



interface TaskViewProps {
    task : TaskModel;
    handleCancel() : void;
    handleTaskEdit(data : TaskModel) : void;
}

const TaskEdit = ({task, handleCancel, handleTaskEdit}: TaskViewProps) => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const handleCancelClick = () => {
        handleCancel();
    }
    const submitForm : SubmitHandler<TaskModel> = (data) => {
        handleTaskEdit(data);
        handleCancel();
    };
    return (
        <form>
            <TaskHeader>
                <FormInput type="text" defaultValue={task.name}  {...register("name")}/>
                <TiTimes size={20} onClick={handleCancelClick} className="closeEdit"/>
                <TiTick size={20} className="validEdit" onClick={handleSubmit(submitForm)}/>
            </TaskHeader>
            <TaskDescription defaultValue={task.description} {...register("description")}/>
            <TaskDuration><FormInput type="text" defaultValue={task.timeLeft}  {...register("timeLeft", {min : 0, max : task.duration})}/> minutes left</TaskDuration>
            <ErrorMessage>{errors.timeLeft && `Time left must be between 0 and ${task.duration}`}</ErrorMessage>
            <ProgressBar completed={task.duration - task.timeLeft} total={task.duration} color="#ffff00" shadow="#ffff00"></ProgressBar><br/>
            <div>{task.tags.map(x => <Tag name={x} key={x}></Tag>)}</div>
            <input type="hidden" {...register("id")} value={task.id}/>            
        </form>
    )
}

const TaskHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;  
    & .closeEdit {
        height: 100%;
        color: #dc143c92;
        &:hover {
            color: #dc143c;            
            cursor: pointer;
        }
    }
    & .validEdit {
        height: 100%;
        color: #14dc4692;
        &:hover {
            color: #14dc46;            
            cursor: pointer;
        }
    }
`;

const FormInput = styled.input`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    font-weight: bold;
    color: white !important;    
    border: none;
    background-color: transparent !important;
    border-bottom: solid 1px white;
    &:focus {
        outline: none;
    }
`;

const TaskDescription = styled.textarea`
    font-style: italic;
    color: white;
    font-size: 0.8em; 
    margin-top: 5px;
    resize: none;
    width: 100%;
    height: 100px;
    background-color: transparent;
    border: solid 1px white;
    border-radius: 5px;
`;

const TaskDuration = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    color : white;
`;

const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
`;


export default TaskEdit;