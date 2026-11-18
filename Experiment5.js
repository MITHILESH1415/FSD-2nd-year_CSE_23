// const express = require('express');
// const app = express();

// //Student data
// const students = [
//     { id: 1, name: 'John Doe', branch:"CSE" },
//     { id: 2, name: 'Jane Smith', branch:"IT" },
// ];
// //GET route
// app.get('/students', (req, res) => {
//     res.json(students);
// });

// //Start server
// app.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/students");
// });

const express = require('express');
const app = express();

let students = [
    { id: 1, name: 'Rahul', branch: 'CSE', age: 20 },
    { id: 2, name: 'Aman', branch: 'IT', age: 21 },
    { id: 3, name: 'Priya', branch: 'CSE', age: 20 },
    { id: 4, name: 'Neha', branch: 'ECE', age: 21 }
];

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
});

app.post('/students', (req, res) => {
 const newStudent = req.body;
      students.push(newStudent);
    res.status(201).json({ message: 'Student added successfully', student: newStudent });
 });
 
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/students');
});


//post operation
// const express = require('express');
// const app = express();

// app.use(express.json());

// let students = [
//     { id: 1, name: 'Rahul', branch: 'CSE', age: 20 },
//     { id: 2, name: 'Aman', branch: 'IT', age: 21 }
// ];

// app.get('/', (req, res) => {
//     res.send('Server is running');
// });

// app.post('/students', (req, res) => {
//     const newStudent = req.body;
//     students.push(newStudent);
//     res.status(201).json({ message: 'Student added successfully', student: newStudent });
// });

// app.listen(3000, () => {
//     console.log('Server running at http://localhost:3000');
// });