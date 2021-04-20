import './App.css';
import TaskList from './screen/TaskList';
import {BrowserRouter , NavLink, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div  className="body-container">
          <div className="nav-container">
            <NavLink to="/taskList" activeClassName="nav-link-active" className="nav-link">Task List</NavLink>
            <NavLink to="/test" activeClassName="nav-link-active" className="nav-link">Task List</NavLink>
            <NavLink to="/test2" activeClassName="nav-link-active" className="nav-link">Task List</NavLink>
            <NavLink to="/test3" activeClassName="nav-link-active" className="nav-link">Task List</NavLink>
            <NavLink to="/test5" activeClassName="nav-link-active" className="nav-link">Task List</NavLink>
          </div>        
          <div className="content">
            <Route path="/taskList" component={TaskList}></Route>
          </div>
        </div>
      </BrowserRouter >
      
    </div>
  );
}

export default App;
