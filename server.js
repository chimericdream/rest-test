const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/dest', (req, res) => {
    res.status(200).end();
})

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

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
