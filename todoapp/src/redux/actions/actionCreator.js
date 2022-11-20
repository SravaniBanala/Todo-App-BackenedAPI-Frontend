import * as actionTypes from './index.js';
import TodoService from '../../service/service';

export const fetchAllToDoTasks = () => async(dispatch) => {
    try {
        const res = await TodoService.getAllToDoTask().then(response => response.json());
        dispatch({
            type: actionTypes.GET_TODO,
            payload: res
        });
    } catch (err) {
        console.log(err);
    }
}

export const createToDoTask = (payload) => async(dispatch) => {
    try {
        const res = await TodoService.createToDoTask(payload).then( response => response.json());
        dispatch({
            type: actionTypes.ADD_TODO,
            payload: res
        })
    } catch (err) {
        console.log(err);
    }
}

export const updateToDoTasks = (id) => async(dispatch) =>  {

    try {
        const res = await TodoService.updateToDoTask(id).then( response => response.json());
        dispatch({
            type: actionTypes.UPDATE_TODO,
            payload: res
        })
    } catch (err) {
        console.log(err);
    }

}

export const deleteToDoTask = (id) => async(dispatch) => {
    try {
        const res = await TodoService.deleteToDoTask(id).then ( response => response.json());
        dispatch({
            type: actionTypes.REMOVE_TODO,
            payload: res
        })
    } catch (err) {
        console.log(err);
    }
}
