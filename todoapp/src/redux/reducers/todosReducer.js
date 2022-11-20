import * as actionTypes from '../actions/index.js';

const initialState = [];

function todoReducers (todo = initialState,action) {
    const {type,payload} = action;

    console.log('from reducer action ', action)
    switch (type) {
        case actionTypes.GET_TODO:
            return payload;
        case actionTypes.ADD_TODO: 
            return [...todo, action.payload];
        case actionTypes.ADD_TODO:
            return payload;
        case actionTypes.UPDATE_TODO: 
            return todo.map ( todo => {
              return  todo.id === action.payload.id ? {...todo, status: 'Close'} : todo
            });
        case actionTypes.REMOVE_TODO:
            return todo.filter( todo => {
                return todo.id !== action.payload});
        default: 
        return todo;
    }
}

export default todoReducers;