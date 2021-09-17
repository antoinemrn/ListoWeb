import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import TodoModel from "../models/todo";



const AddTask = ()  => {
    const {handleSubmit, register} = useForm();
    const submitForm : SubmitHandler<TodoModel> =  (data) => {
        postTodo(data);
    };

    async function postTodo(data : TodoModel) {
        await axios.post<TodoModel>("http://localhost:8080/api/todos", data)
                .then((response) => 
                {
                    console.log(response.data);
                })
                .catch((error) => console.log(error));
    };



    return (
        <ViewContainer>
            <Form onSubmit={handleSubmit(submitForm)}>
                <Title>Todo</Title>
                <InputGroup>
                    <Label>Title</Label>
                    <FormInput placeholder="Title..." {...register("name")}/>
                </InputGroup>
                <InputGroup>
                    <Label>Description</Label>
                    <FormArea placeholder="Description..." {...register("description")}/>
                </InputGroup>
                <InputGroup>
                    <Label>Duration</Label>
                    <FormInput placeholder="Duration..." {...register("duration")}/>
                </InputGroup>
                <FormFooter>
                    <FormButton type="submit" value="Add"/>
                </FormFooter>
            </Form>
        </ViewContainer>
    )
}
const ViewContainer = styled.div`    
    margin: auto;
    width: 50%;
    margin-top: 100px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(15px);
    border-radius: 5px;
    padding-bottom: 30px;
`;
const Title = styled.div`
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    color: #00af75;    
    margin-top: 30px;
`;
const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;  
    grid-gap: 30px;
    width: 75%;
    margin: auto;
`;
const InputGroup = styled.div`   
    width: 100%;
`;
const Label = styled.div`
    color : black; 
    font-weight: bold;
    font-size: 1.3em;
    margin-bottom: 5px;
`;
const FormInput = styled.input`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    width: calc(100% - 20px);
    padding : 10px;
    border: none;
    border-radius: 5px;
    background-color: #d3d3d360;
    font-size: 1.1em;
    color : black;
    &::placeholder {
        color: #bebebe;
    }
    &:focus {
        outline: none;
    }
    
`;
const FormArea = styled.textarea`
    color: black;
    font-size: 1em; 
    resize: none;
    width: calc(100% - 20px);
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
const FormFooter = styled.div`
  width: 100%;
  margin-bottom: 0px;
`;
const FormButton = styled.input`  
  width: 100%;
  padding: 20px;
  background-color: #00af75;
  border-radius: 5px;
  border:none;
  color: white;
  font-size: 1.5em;
  &:hover{
      background-color: #03d690;
      cursor: pointer;
  }
`;


export default AddTask;
