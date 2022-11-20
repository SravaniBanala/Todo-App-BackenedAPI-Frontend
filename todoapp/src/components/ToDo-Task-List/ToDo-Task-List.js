import { useEffect } from "react";
import { fetchAllToDoTasks } from '../../redux/actions/actionCreator.js';
import { useDispatch, useSelector } from "react-redux";
import ToDoItem from './ToDo-Task-ListItem/ToDo-Task-ListItem';
import './ToDo-Task-List.scss';



export const Todos = () =>  {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo);
    useEffect(() => {
        dispatch(fetchAllToDoTasks());
    },[])

    return (
        <ol className="container">
           {
            todos.map ( todo => {
                return <ToDoItem
                    key = {todo._id}
                    todo = {todo}
                />
            })
           }
        </ol>
        
    )
}



  export default Todos;