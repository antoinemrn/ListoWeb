import styled from 'styled-components';
import {BrowserRouter , Route} from 'react-router-dom';
import {FaListUl} from 'react-icons/fa'

import NavBar from './components/NavBar';
import MainScreen from './screen/MainScreen';

import taskMock from './resources/tasks.json';


function App() {
  return (
    <MainPage>
      <BrowserRouter>
          <Header>
            <NavBrand>
              <FaListUl/>
              <NavTitle>Listo</NavTitle>
            </NavBrand>
            <NavBar></NavBar>
          </Header>        
          <Content>
            <Route path="/taskList">
              <MainScreen tasks={taskMock}></MainScreen>
            </Route>
          </Content>
      </BrowserRouter >      
    </MainPage>
  );
}

const MainPage = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const NavBrand = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 10% 1fr;
  grid-gap: 5px;
  align-items: center;
  filter: drop-shadow(0px 0px 30px crimson);
  & > svg {
    color: crimson;    
    width: 80%;
    height: 100%;
  }
`;
const NavTitle = styled.div`  
  color: white;
  font-weight: bold;
  font-size: 2em;  
`;


const Header = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr 30%;
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(15px);
  height: 100%;
`;

export default App;
