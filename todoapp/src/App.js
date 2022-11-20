import './App.scss';
import React from 'react';
import NavBar from './components/Nav-Bar/Nav-Bar';
import ToDoTaskList from './components/ToDo-Task-List/ToDo-Task-List';
import AddToDoTask from './components/Add-ToDo-Task/Add-ToDo-Task';

class App extends React.Component {

 constructor() {
    super();
    this.state = {
       showHideForm: false
    } 
  }

  toggleAddToDoForm = (toggleEvent) => {
   this.setState({showHideForm: toggleEvent});
  }

  render() {
    const { showHideForm } = this.state;
    return (
      <div className="App">
        <NavBar showAddToDoForm = {this.toggleAddToDoForm}></NavBar>
        <div className="main-container">
          <ToDoTaskList ></ToDoTaskList>
          {showHideForm && <AddToDoTask showAddToDoForm = {this.toggleAddToDoForm} />}      
        </div>
      </div>
    );
  }

}

export default App;
