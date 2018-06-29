
const mongoose = require('mongoose');
const app = require('./server/server');

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
const port = process.env.port || 3000;

db.on('error', (err) => {
    console.error(`Error while connecting to DB: ${err.message}`);
});
db.once('open', () => {
    console.log('DB connected!');
});

app.listen(port, () => {
    console.log(`Server listening on: ${port}`);
});
