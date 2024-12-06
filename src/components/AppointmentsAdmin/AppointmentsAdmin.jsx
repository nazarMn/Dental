import React, { useEffect, useState } from 'react';
import './AppointmentsAdmin.css';

const AppointmentsAdmin = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Отримання записів на прийом
    fetch('http://localhost:3000/appointments')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP помилка! Статус: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setAppointments(data.reverse()))
      .catch((err) => console.error('Не вдалося отримати записи:', err));
  }, []);

  // Функція для видалення запису
  const deleteAppointment = (id) => {
    fetch(`http://localhost:3000/appointments/${id}`, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP помилка! Статус: ${response.status}`);
        }
        // Оновлення стану після видалення
        setAppointments(appointments.filter((appointment) => appointment._id !== id));
      })
      .catch((err) => console.error('Не вдалося видалити запис:', err));
  };

  return (
    <div className="appointmentsAdmin">
      <div className="appointmentsAdminBottom">
        <div className="appointmentsAdminLeft">
          <h3>Записи на прийом</h3>
          <table>
            <thead>
              <tr>
                <th>Ім'я</th>
                <th>Стать</th>
                <th>Телефон</th>
                <th>Email</th>
                <th>Відділ</th>
                <th>Дата</th>
                <th>Деталі</th>
                <th>Видалити</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.name}</td>
                  <td>{appointment.gender}</td>
                  <td>{appointment.phone}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.department}</td>
                  <td>{new Date(appointment.date).toLocaleDateString()}</td>
                  <td>{appointment.details}</td>
                  <td>
                    <button onClick={() => deleteAppointment(appointment._id)}>Видалити</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsAdmin;
