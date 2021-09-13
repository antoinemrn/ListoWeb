import styled from "styled-components"

const Events = () => {
    return (
        <Container>
            <Title>Events</Title>
        </Container>
    )
}

const Container = styled.div`
  border-left: solid 1px lightgray;
  padding: 10px;
`;

const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 1.3em;
`;

export default Events