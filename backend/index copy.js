const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../site/build')));

const api = require('./routes/route');
app.use('/api', api);

app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../site/build', 'index.html'));
})

app.listen(PORT, () =>{
    console.log('SERVER LISTENING');
})