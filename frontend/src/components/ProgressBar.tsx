import styled from "styled-components"

interface ProgressProps {
    completed : number;
    total: number;
    colorStart: string;
    colorEnd : string;
}

const ProgressBar = ({completed, total, colorStart, colorEnd} : ProgressProps) => {
    return (
        <Container>
            <ProgressDiv completed={completed} total={total} colorStart={colorStart} colorEnd={colorEnd}/>
        </Container>
    )
}
const Container = styled.div`
    height: 10px;
    background-color: rgba(0, 0, 0, 0.068);
    border-radius: 10px;
`;

const ProgressDiv = styled.div<ProgressProps>`   
    height: 100%;
    background-image: ${(props : ProgressProps) => `linear-gradient( 135deg, ${props.colorStart} 10%, ${props.colorEnd} 100%)`} ;
    width: ${(props : ProgressProps) => props.completed/props.total*100}%;    
    border-radius: inherit;
`;

export default ProgressBar
