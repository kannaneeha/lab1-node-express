const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Express Server');
});

app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Neeharika Kanna',
        section: '252U1R5064'
    });
});

app.get('/time', (req, res) => {
    res.status(200).send(new Date().toString());
});

app.use((req, res) => {
    res.status(404).send('404 Page Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
