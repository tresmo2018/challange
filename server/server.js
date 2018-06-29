const express = require('express');
const bodyParser = require('body-parser');
const restify = require('express-restify-mongoose');

const app = express();
const Wines = require('../api/winesModel');
const router = require('../api/wines');

app.use(bodyParser.json());

restify.serve(router, Wines);

app.use('/wines', router);

app.use((err, req, res, next) => {
    if (err) {
        if (err.name === 'ValidationError') {
            let errOut = 'VALIDATION_ERROR, \n validation: {\n';
            Object.keys(err.errors).forEach((field) => {
                console.log(err.errors[field].message);
                if (err.errors[field].message.indexOf('required') !== -1) {
                    errOut += `${err.errors[field].path}': MISSING', \n `;
                } else {
                    errOut += `${err.errors[field].message}, \n `;
                }
            });

            errOut += '}';
            return res.status(400).send(errOut);
        }
        return res.status(400).send('error: UNKNOWN_OBJECT');
    }
    return res.status(400).send('error: UNKNOWN_OBJECT');
});

module.exports = app;
