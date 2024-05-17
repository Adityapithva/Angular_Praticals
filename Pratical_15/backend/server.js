const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
let students = [
    { id: 1, name: 'John Doe', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Jane Smith', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Jim Brown', age: 21, major: 'Physics' },
];
app.get('/api/students', (req, res) => {
    res.json(students);
});
app.post('/api/students', (req, res) => {
    const newStudent = req.body;
    newStudent.id = students.length + 1;
    students.push(newStudent);
    res.status(201).json(newStudent);
});
app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
