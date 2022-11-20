import express from "express";
import * as todoResource from './../controllers/todoResource-controllers.js';

const Router = express.Router();

/**
 * REST methods with end points
 */
Router.route('/todoResource')
    .post(todoResource.post)
    .delete(todoResource.deleteAll)
    .get(todoResource.get);

Router.route('/todoResource/:id')
    /**
     * id in params
     */
    .get(todoResource.getResourceById)
    .delete(todoResource.remove)
    .put(todoResource.put);


export default Router;
