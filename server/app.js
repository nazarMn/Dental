const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:hH8mI4EEax8GCnGR@admin.i6lpg.mongodb.net/?retryWrites=true&w=majority&appName=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
});




app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const emailSchema = new mongoose.Schema({
    email: String
});
const Email = mongoose.model('Email', emailSchema);
app.post('/send', (req, res) => {
    const { email } = req.body;
    res.send({ email });
    const newEmail = new Email({ email });
    newEmail.save();

})


const appointmentSchema = new mongoose.Schema({
    name: String,
    gender: String,
    phone: String,
    email: String,
    department: String,
    date: String,
    details: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);








app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});