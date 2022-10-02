const express = require("express");
const app = express();
var path = require('path');
const port = process.env.PORT || 3001;

// app.get("/", (req, res) => res.type('html').send('index.html'));
app.use(express.static(path.resolve(__dirname, 'pub/')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



