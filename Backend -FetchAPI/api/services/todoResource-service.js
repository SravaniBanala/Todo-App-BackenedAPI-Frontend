import TodoResource from './../models/todoResource.js';

/**
 *  create and save an item for todoResource 
 * @param {todoResource} body
 * @returns {Promise<todoResource>}
 * */
export const save = async (todoResource) => {
    const newTodoResource = new TodoResource(todoResource);
    return newTodoResource.save();
};

/** fetch all the list of items for todoResource */
export const search = async (query) => {
    const params = {...query};
    const todoResource = TodoResource.find(params).exec();
    return todoResource;
};


/**
 *  fetch items by id
 * @param {id} _id 
 * @returns {Promise<todoResource>}
 * */
export const searchResourceById = async (id) => {
    const todoResourceById = TodoResource.findById(id).exec();
    return todoResourceById;
}

/**
 *  update items by id
 * @param {id} id 
 * @param {todoTask} body
 * @returns {Promise<todoResource>}
 * */
export const update = async (id,todoTask) => {
    todoTask.modifiedDate = new Date();
    const query = {id: id};
    const updateTodoResource = TodoResource.findOneAndUpdate(query, todoTask).exec();
    return updateTodoResource;
};

/**
 *  Delete items by id
 * @param {id} id 
 * @returns {Promise<String>}
 * */
export const remove = async (id) => {
    const query = {id: id};
    const updateTodoResource = TodoResource.findOneAndDelete(query).exec();
    return updateTodoResource;
}

/**
 *  Delete All items */
export const deleteAll = async () => {
    const deleteAllTodoResource = TodoResource.deleteMany().exec();
    return deleteAllTodoResource;
}
