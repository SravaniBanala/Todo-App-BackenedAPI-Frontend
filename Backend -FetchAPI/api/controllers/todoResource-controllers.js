import * as todoResourceService from './../services/todoResource-service.js';

/** 
 *  setting success response 
 * @param {obj} any
 * */
const setResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

/** 
 *  setting error response 
 * @param {err} error
 * */
const setError = (err, response) => {
    response.status(500);
    response.json(err);
}

/* creating and saving todoResource list */
export const post = async (req, res) => {
    try {
        const todoResource = req.body;
        const savedTodoResource = await todoResourceService.save(todoResource);
        setResponse(savedTodoResource, res);
    } catch (error) {
        setError(error, res);
    }
}

/* fetching all the data from db */
export const get = async (req, res) => {
    try {
        const description = req.query.description;
        const title = req.query.title;
        const id = req.query.id;
        const todoList = {};     // creating search query
        if (id) {
            todoList.id = id;
        }
        if(title) {
            todoList.title = title;
        }
        if (description) {
            todoList.description = description;
        }
        const todoResourceList= await todoResourceService.search(todoList);
        setResponse(todoResourceList, res);
    } catch(err) {
        setError(err, res);
    }
}

/** 
* fetching data based on object id
* @param {_id} objectId 
*/
export const getResourceById = async (req, res) => {
    try {
        const resourceId = req.params.id;
        const getResourceId = await todoResourceService.searchResourceById(resourceId);
        setResponse(getResourceId, res);
    } catch(err) {
        setError(err, res);
    }
}

/** 
* updating data based on id
* @param {id} id 
*/
export const put = async (req, res) => {
    try {
        const queryId = req.params.id;
        const updatedTodoResource = {...req.body};
        const updateTodoResource = await todoResourceService.update(queryId, updatedTodoResource);
        setResponse(updateTodoResource , res);

    } catch (err) {
        setError(err, res);
    }  
}

/** 
* deleting data based on id
* @param {id} id 
*/
export const remove = async (req, res) => {
    try {
        const queryId = req.params.id;
        const removeTodoResource = await todoResourceService.remove(queryId);
        setResponse(queryId, res);

    } catch (err) {
        setError(err, res);
    } 
}

/** 
* deleting all the data
*/
export const deleteAll = async (req, res) => {
    try {
        const deleteAllTodoResource = await todoResourceService.deleteAll();
        setResponse({ message: 'Successfully Removed  All to do tasks' }, res);
    }
    catch (error) {
        setError(err, res);
    }

}

