const app = require('./controller/app');
const server = app.listen(3000, () => {
    const port = server.address().port;
    console.log(`Listening on ${port}`);
});
