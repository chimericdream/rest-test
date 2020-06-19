const express = require('express');
const bodyParser = require('body-parser');
const formidable = require('formidable');
const app = express();

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
        console.log('Fields', fields);
        console.log('Files', files);
        // files.map(file => console.log(file));
    });
});

app.get('/dest', (req, res) => {
    res.status(200).end();
});

app.post('/score', (req, res) => {
    console.dir(req.headers);
    console.dir(req.body);
    res.status(200).end();
});

app.post('/match', (req, res) => {
    console.dir(req.headers);
    console.dir(req.body);
    res.status(200).end();
});

[200, 204, 400, 404, 409, 500].forEach((val) => {
    app.post(`/status/${val}`, (req, res) => {
        res.status(val).end();
    });
});

app.listen(3333, () => {
    console.log('Example app listening on port 3333!')
});
