const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:hH8mI4EEax8GCnGR@admin.i6lpg.mongodb.net/test?retryWrites=true&w=majority&appName=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
});

// Middleware
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Define the appointment schema and model
const appointmentSchema = new mongoose.Schema({
    name: String,
    gender: String,
    phone: String,
    email: String,
    department: String,
    date: Date,
    details: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Define the email schema and model
const emailSchema = new mongoose.Schema({
    email: String
});

const Email = mongoose.model('Email', emailSchema);

// Route to save appointment data
app.post('/send-appointment', (req, res) => {
    const { name, gender, phone, email, department, date, details } = req.body;

    const newAppointment = new Appointment({
        name,
        gender,
        phone,
        email,
        department,
        date,
        details
    });

    newAppointment.save()
    .then(() => {
        res.status(201).send({ message: 'Appointment saved successfully' });
    })
    .catch((err) => {
        console.error('Failed to save appointment:', err);
        res.status(500).send({ message: 'Failed to save appointment' });
    });
});

// Route to save email data
app.post('/send-email', (req, res) => {
    const { email } = req.body;

    const newEmail = new Email({ email });

    newEmail.save()
    .then(() => {
        res.status(201).send({ message: 'Email saved successfully' });
    })
    .catch((err) => {
        console.error('Failed to save email:', err);
        res.status(500).send({ message: 'Failed to save email' });
    });
});





app.post('/add-professional', (req, res) => {
    const { imgSrc, title, specialist } = req.body;

    const newProfessional = new Professional({ imgSrc, title, specialist });

    newProfessional.save()
        .then(() => res.status(201).json({ message: 'Professional added successfully' }))
        .catch((err) => res.status(500).json({ message: 'Failed to add professional', error: err }));
});

// Получение списка докторов
app.get('/professionals', (req, res) => {
    Professional.find()
        .then((professionals) => res.json(professionals))
        .catch((err) => res.status(500).json({ message: 'Failed to retrieve professionals', error: err }));
});





// Serve the frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
