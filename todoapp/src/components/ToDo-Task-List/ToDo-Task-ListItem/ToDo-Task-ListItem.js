import * as React from 'react';
import './ToDo-Task-ListItem.scss'
import { updateToDoTasks, deleteToDoTask } from '../../../redux/actions/actionCreator.js';
import { useDispatch } from 'react-redux';
import ToDoItemDetail from './ToDo-Task-Details/ToDo-Task-Details.js';

const ToDoItem = ({todo}) => {
    const [checked, setChecked] = React.useState(false);
    const [toggleDescDiv, setToggleDescriptionDiv] = React.useState(false);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        if (e.target.checked) {
            setChecked(true);
            dispatch(updateToDoTasks(todo.id))
        }       
    };


    return (
        <li>
            <div className= {`list-container ${todo.status == 'Open'? 'border-success': 'border-warning' }`} onClick={() => {
                setToggleDescriptionDiv(!toggleDescDiv)
            }}>
                <span className='title-span'>{todo.title}</span> 
                <span className={`${todo.status == 'Open'? 'visible': 'hide-visible' }`}>
                    
                        <input
                            type="checkbox"
                            onClick={(e) => {e.stopPropagation()}}
                            checked={checked}
                            onChange={handleChange}
                        />
                    <label>
                        Mark Complete
                    </label>
                </span>
                <span className = {`status-span ${todo.status == 'Open'? 'bg-success': 'bg-warning' }`}>{todo.status}</span>
                <span><button className='btn-red' onClick={() => dispatch(deleteToDoTask(todo.id)) }><i className="fa fa-trash"></i></button></span>
            </div>
            {toggleDescDiv && <div>
                <ToDoItemDetail todo = {todo}/>
            </div>}
        </li>
        
    )
}

export default ToDoItem;