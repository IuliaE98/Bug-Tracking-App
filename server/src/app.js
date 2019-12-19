const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');

const router = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Bughunter');
})

app.use('/api', router);

app.listen(8080, () => console.log('Server started'));
