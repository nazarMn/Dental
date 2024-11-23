const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');

// Підключення до MongoDB
mongoose.connect('mongodb+srv://admin:C0Urzbr1pymwOgsK@admin.i6lpg.mongodb.net/?retryWrites=true&w=majority&appName=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Підключено до MongoDB');
})
.catch((err) => {
    console.error('Не вдалося підключитись до MongoDB:', err);
});

// Middleware
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Схема і модель для записів на прийом
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

// Схема і модель для email
const emailSchema = new mongoose.Schema({
    email: String
});

const Email = mongoose.model('Email', emailSchema);

const commentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    rating: Number
});

const Comment = mongoose.model('Comment', commentSchema);

app.post('/send-comment', (req, res) => {
    const { name, comment, rating } = req.body;

    const newComment = new Comment({
        name,
        comment,
        rating
    });

    newComment.save()
    .then(() => {
        res.status(201).json({ message: 'Коментар збережено успішно' });
    })
    .catch((err) => {
        console.error('Не вдалося зберегти коментар:', err);
        res.status(500).json({ message: 'Не вдалося зберегти коментар' });
    });
})


// Маршрут для збереження даних запису на прийом
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
        res.status(201).json({ message: 'Запис на прийом збережено успішно' });
    })
    .catch((err) => {
        console.error('Не вдалося зберегти запис:', err);
        res.status(500).json({ message: 'Не вдалося зберегти запис' });
    });
});

// Маршрут для збереження email
app.post('/send-email', (req, res) => {
    const { email } = req.body;

    const newEmail = new Email({ email });

    newEmail.save()
    .then(() => {
        res.status(201).json({ message: 'Email збережено успішно' });
    })
    .catch((err) => {
        console.error('Не вдалося зберегти email:', err);
        res.status(500).json({ message: 'Не вдалося зберегти email' });
    });
});

// Маршрут для отримання всіх записів на прийом
app.get('/appointments', (req, res) => {
    Appointment.find()
        .then((appointments) => {
            res.status(200).json(appointments);
        })
        .catch((err) => {
            console.error('Не вдалося отримати записи:', err);
            res.status(500).json({ message: 'Не вдалося отримати записи' });
        });
});

// Маршрут для отримання всіх email
app.get('/emails', (req, res) => {
    Email.find()
        .then((emails) => {
            res.status(200).json(emails);
        })
        .catch((err) => {
            console.error('Не вдалося отримати email:', err);
            res.status(500).json({ message: 'Не вдалося отримати email' });
        });
});


app.get('/comments', (req, res) => {
    Comment.find()
        .then((comments) => {
            res.status(200).json(comments);
        })
        .catch((err) => {
            console.error('Не вдалося отримати коментарі:', err);
            res.status(500).json({ message: 'Не вдалося отримати коментарі' });
        });
});










const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads'); // Папка для збереження файлів
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + '-' + file.originalname);
    },
  });
  const upload = multer({ storage });
  
  // Схема і модель для лікарів
  const doctorSchema = new mongoose.Schema({
    name: String,
    specialty: String,
    photo: String, // URL фото
  });
  
  const Doctor = mongoose.model('Doctor', doctorSchema);
  
  // Маршрут для збереження лікаря з фото
  app.post('/add-doctor', upload.single('photo'), (req, res) => {
    const { name, specialty } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;
  
    const newDoctor = new Doctor({ name, specialty, photo });
  
    newDoctor
      .save()
      .then(() => {
        res.status(201).json({ message: 'Лікаря збережено успішно' });
      })
      .catch((err) => {
        console.error('Не вдалося зберегти лікаря:', err);
        res.status(500).json({ message: 'Не вдалося зберегти лікаря' });
      });
  });
  
  // Маршрут для отримання всіх лікарів
  app.get('/doctors', (req, res) => {
    Doctor.find()
      .then((doctors) => {
        res.status(200).json(doctors);
      })
      .catch((err) => {
        console.error('Не вдалося отримати лікарів:', err);
        res.status(500).json({ message: 'Не вдалося отримати лікарів' });
      });
  });
  
  // Обслуговування статичних файлів
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




// Маршрут для отримання всіх лікарів
app.get('/doctors', (req, res) => {
    Doctor.find()
      .then((doctors) => {
        res.status(200).json(doctors);
      })
      .catch((err) => {
        console.error('Не вдалося отримати лікарів:', err);
        res.status(500).json({ message: 'Не вдалося отримати лікарів' });
      });
  });
  







// Маршрут для обслуговування фронтенду
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Запуск серверу
app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});
