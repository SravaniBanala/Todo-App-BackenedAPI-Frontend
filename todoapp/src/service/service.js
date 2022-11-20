const API_URL = 'http://localhost:8080/todoResource';

const getAllToDoTask = async () => { 
    return fetch(API_URL,{
        method:'get'
    })       
}

const createToDoTask = async (payload) => {
    return fetch(API_URL, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
}

const updateToDoTask = async (id) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "status": "Close" })
    })
}

const deleteToDoTask = async (id) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'delete'
    })
}


const TodoService = {
    getAllToDoTask,
    createToDoTask,
    updateToDoTask,
    deleteToDoTask
}

export default TodoService;