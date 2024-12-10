import React, { useEffect, useState } from 'react';
import './AppointmentsAdmin.css';

const AppointmentsAdmin = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const appointmentsPerPage = 15;

  useEffect(() => {
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

  const deleteAppointment = (id) => {
    fetch(`http://localhost:3000/appointments/${id}`, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP помилка! Статус: ${response.status}`);
        }
        setAppointments(appointments.filter((appointment) => appointment._id !== id));
      })
      .catch((err) => console.error('Не вдалося видалити запис:', err));
  };

  const totalPages = Math.ceil(appointments.length / appointmentsPerPage);
  const startIndex = (currentPage - 1) * appointmentsPerPage;
  const currentAppointments = appointments.slice(startIndex, startIndex + appointmentsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
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
              {currentAppointments.map((appointment) => (
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
          <div className="pagination">
            <button onClick={goToPrevPage} disabled={currentPage === 1}>
              Попередня
            </button>
            <span>{`${currentPage} із ${totalPages}`}</span>
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>
              Наступна
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsAdmin;
