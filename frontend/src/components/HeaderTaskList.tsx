import styled from 'styled-components';


interface HeaderProps {
    title : string;
    nbTodos : number;
}


 const HeaderTaskList = ({title, nbTodos} : HeaderProps) => {
    return (
        <>
            <Title>{title}</Title>
            <TodosCount> {nbTodos}</TodosCount>
        </>
    )
}



const TodosCount = styled.span`
    font-weight: bold;
    color: rgba(255, 255, 255, 0.4);
    font-size: 1.2em;
  
`;
const Title = styled.div`
    display: inline-block;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
    font-size: 1.2em;
`;


export default HeaderTaskList;