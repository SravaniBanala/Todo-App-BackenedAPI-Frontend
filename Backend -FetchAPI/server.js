import app from './api/app.js';
/**
 * server active on port
 */
const port = 8080;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});