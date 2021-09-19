const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/Forms'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/Forms/' }),
);

app.listen(process.env.PORT || 8080);