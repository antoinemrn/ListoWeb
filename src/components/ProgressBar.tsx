import styled from "styled-components"

interface ProgressProps {
    completed : number;
    color: string;
    shadow : string;
}

const ProgressBar = ({completed, color, shadow} : ProgressProps) => {
    return (
        <Container>
            <ProgressDiv completed={completed} color={color} shadow={shadow}/>
        </Container>
    )
}
const Container = styled.div`
    height: 10px;
    background-color: rgba(0, 0, 0, 0.342);
    border: solid 1px rgba(255, 255, 255, 0.493);
    border-radius: 10px;
`;

const ProgressDiv = styled.div<ProgressProps>`   
    height: 100%;
    background-color: ${(props : ProgressProps) => props.color};
    box-shadow: 0px 0px 5px ${(props : ProgressProps) => props.completed !== 0 ? 1 : 0}px ${(props : ProgressProps) => props.shadow};
    width: ${(props : ProgressProps) => props.completed}%;    
    border-radius: inherit;
`;

export default ProgressBar
