import styled from 'styled-components';
import {TiTick, TiTimes} from 'react-icons/ti';
import { SubmitHandler, useForm } from 'react-hook-form';

import TaskModel from '../models/todo';
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
            <ProgressBar completed={task.duration - task.timeLeft} total={task.duration} colorStart="#92FFC0" colorEnd="#00af75"></ProgressBar><br/>
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
    color: black !important;    
    border: none;
    border-radius: 5px;
    background-color: #d3d3d360;  
    &:focus {
        outline: none;
    }
`;

const TaskDescription = styled.textarea`
    margin-top:  10px;
    color: black;
    font-size: 1em; 
    resize: none;
    width: 95%;
    height: 100px;
    padding: 10px;
    background-color: #d3d3d360;
    border-radius: 5px;
    border: none;
    &::placeholder {
        color: #bebebe;
    }
    &:focus {
        outline: none;
    }
`;

const TaskDuration = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    color : black;
`;

const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
`;


export default TaskEdit;