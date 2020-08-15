const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

app.use(express.static('client/build'));

// // handle static assets
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});