const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.get('/api/data', (req, res) => {
    res.json({ message: 'This is data from the backend server.' });
});
app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
