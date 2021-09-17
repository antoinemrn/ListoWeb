import styled from 'styled-components';


interface TagProps {
    name : string;
}

const Tag = ({name}: TagProps) => {
    return (
        <TagContainer>
            {name}
        </TagContainer>
    )
}


const TagContainer = styled.div`
    display: inline-block;
    background-color: #00af75;
    padding: 5px;
    color: white;
    border-radius: 5px;
    margin-right: 5px;
`;


export default Tag;



