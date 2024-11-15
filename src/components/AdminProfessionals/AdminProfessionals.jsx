import React, { useState, useEffect } from 'react';
import './AdminProfessionals.css';

const AdminProfessionals = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [photo, setPhoto] = useState(null);
  const [doctors, setDoctors] = useState([]);

  // Завантаження всіх лікарів
  useEffect(() => {
    fetch('http://localhost:3000/doctors')
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error('Помилка при отриманні лікарів:', err));
  }, []);

  // Обробка форми
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('specialty', specialty);
    if (photo) {
      formData.append('photo', photo);
    }

    fetch('http://localhost:3000/add-doctor', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Помилка при збереженні лікаря');
      })
      .then((data) => {
        console.log(data.message);
        setDoctors([...doctors, { name, specialty, photo: URL.createObjectURL(photo) }]);
        setName('');
        setSpecialty('');
        setPhoto(null);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="adminProfessionals">
      <h2>Додати лікаря</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Ім'я"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Спеціальність"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          required
        />
        <button type="submit">Додати лікаря</button>
      </form>

      <h3>Список лікарів</h3>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>
            <img
              src={`http://localhost:3000${doctor.photo}`}
              alt={doctor.name}
              width="50"
              height="50"
            />
            <p>{doctor.name}</p>
            <p>{doctor.specialty}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProfessionals;
