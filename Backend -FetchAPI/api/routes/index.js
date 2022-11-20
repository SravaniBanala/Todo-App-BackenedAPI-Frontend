import todoResourceRouter from './todoResource-routes.js';

export default (app) => {
    app.use('/', todoResourceRouter);
}