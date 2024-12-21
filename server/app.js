const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

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
app.use(bodyParser.json());
require('dotenv').config();


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




// Маршрут для видалення запису
app.delete('/appointments/:id', (req, res) => {
    const { id } = req.params;

    Appointment.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: 'Запис видалено успішно' });
        })
        .catch((err) => {
            console.error('Не вдалося видалити запис:', err);
            res.status(500).json({ message: 'Не вдалося видалити запис' });
        });
});


// Маршрут для видалення лікаря
app.delete('/delete-doctor/:id', (req, res) => {
    const doctorId = req.params.id;
  
    Doctor.findByIdAndDelete(doctorId)
      .then((result) => {
        if (result) {
          res.status(200).json({ message: 'Лікаря успішно видалено' });
        } else {
          res.status(404).json({ message: 'Лікаря не знайдено' });
        }
      })
      .catch((err) => {
        console.error('Error deleting doctor:', err);
        res.status(500).json({ message: 'Помилка сервера під час видалення лікаря' });
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
  
  app.post('/add-doctor', upload.single('photo'), (req, res) => {
    const { name, specialty } = req.body;
  
    // Перевірка, чи файл було завантажено
    if (!req.file) {
      return res.status(400).json({ message: 'Фото є обов’язковим' });
    }
  
    const photo = `/uploads/${req.file.filename}`;
  
    const newDoctor = new Doctor({ name, specialty, photo });
  
    newDoctor
      .save()
      .then(() => {
        res.status(201).json({ message: 'Лікаря збережено успішно', photo });
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






  app.delete('/emails/:email', (req, res) => {
    const emailToDelete = req.params.email;

    Email.findOneAndDelete({ email: emailToDelete })
        .then(() => {
            res.status(200).json({ message: 'Email видалено успішно' });
        })
        .catch((err) => {
            console.error('Не вдалося видалити email:', err);
            res.status(500).json({ message: 'Не вдалося видалити email' });
        });
});





const transporter = nodemailer.createTransport({
    service: 'gmail', // Можна використовувати інші сервіси, як-от Yahoo, Outlook
    auth: {
         user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/send-emails', (req, res) => {
    const { recipients, text } = req.body;

    if (!recipients || !text) {
        return res.status(400).json({ message: 'Вкажіть отримувачів та текст' });
    }

    const mailOptions = {
        from: 'nazarmn2008@gmail.com',
        to: recipients.join(','),
        subject: 'Розсилка',
        text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Помилка при надсиланні:', error);
            return res.status(500).json({ message: 'Не вдалося надіслати розсилку' });
        }
        res.json({ message: 'Розсилку надіслано!' });
    });
});








const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: String, default: '/uploads/default.png' }, // Додано поле для фото
});

const User = mongoose.model('User', userSchema);




app.post('/register', upload.single('photo'), async (req, res) => {
    const { name, surname, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Будь ласка, заповніть усі обов’язкові поля' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Користувач з таким email вже існує' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const photo = req.file ? `/uploads/${req.file.filename}` : '/uploads/default.png';

        const newUser = new User({
            name,
            surname,
            email,
            password: hashedPassword,
            photo,
        });

        await newUser.save();
        res.status(201).json({ message: 'Реєстрація успішна' });
    } catch (error) {
        console.error('Помилка реєстрації:', error);
        res.status(500).json({ message: 'Сталася помилка при реєстрації' });
    }
});

// Додатково, додайте статичний сервіс для обслуговування папки uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));






app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.status(200).json({ user: { name: user.name, email: user.email, } });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});














  
// Маршрут для обслуговування фронтенду
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Запуск серверу
app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});
