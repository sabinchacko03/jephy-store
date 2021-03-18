const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/product.routes')(app);

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();

app.get('/', (req, res) => {
    res.json({message: "Welcome abroad"});
});

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../site/build')));

// const api = require('./routes/route');
// app.use('/api', api);

app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../site/build', 'index.html'));
})

app.listen(PORT, () =>{
    console.log('SERVER LISTENING');
})