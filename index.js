
const mongoose = require('mongoose');
const app = require('./server/server');

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

const serverPort = process.env.PORT || 3000;
const serverHost = '0.0.0.0';

db.on('error', (err) => {
    console.error(`Error while connecting to DB: ${err.message}`);
});
db.once('open', () => {
    console.log('DB connected!');
});

app.listen(serverPort, serverHost, () => {
    console.log(`Server listening on: ${serverPort}`);
});
