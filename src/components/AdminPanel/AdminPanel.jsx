import React, { useEffect, useState } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [appointments, setAppointments] = useState([]);
  const [emails, setEmails] = useState([]);

  // Отримуємо дані з бекенду
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

    // Отримання email
    fetch('http://localhost:3000/emails')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP помилка! Статус: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setEmails(data.reverse()))
      .catch((err) => console.error('Не вдалося отримати email:', err));
  }, []);

  return (
    <div className="adminPanel">
      <div className="adminPanelTop">
        <h2>Адмін Панель</h2>
      </div>
      <div className="adminPanelBottom">
        <div className="adminPanelBottomLeft">
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
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.name}</td>
                  <td>{appointment.gender}</td>
                  <td>{appointment.phone}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.department}</td>
                  <td>{new Date(appointment.date).toLocaleDateString()}</td>
                  <td>{appointment.details}</td>
                  <td><button>Видалити</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="adminPanelBottomRight">
          <h3>Email-адреси</h3>
          <ul>
            {emails.map((email, index) => (
              <li key={index}>{email.email}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
