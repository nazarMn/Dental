import React, { useState, useEffect } from 'react';
import './AdminProfessionals.css';

const AdminProfessionals = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [photo, setPhoto] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 3;

  // Fetch all doctors
  useEffect(() => {
    fetch('http://localhost:3000/doctors')
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error('Error fetching doctors:', err));
  }, []);

  // Handle form submission
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
        throw new Error('Error saving doctor');
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

  const deleteDoctor = (index) => {
    const doctorToDelete = doctors[index];
    fetch(`http://localhost:3000/delete-doctor/${doctorToDelete._id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error deleting doctor');
        }
        setDoctors(doctors.filter((_, i) => i !== index));
      })
      .catch((err) => console.error(err));
  };

  const totalPages = Math.ceil(doctors.length / doctorsPerPage);
  const startIndex = (currentPage - 1) * doctorsPerPage;
  const currentDoctors = doctors.slice(startIndex, startIndex + doctorsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="adminProfessionals">
      <div className="adminProfessionalsHeader">
        <h2>Manage Doctors</h2>
      </div>
      <div className="adminProfessionalsForm">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Specialty"
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
          <button type="submit">Add Doctor</button>
        </form>
      </div>

      <div className="adminProfessionalsList">
        <h3>Doctors List</h3>
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentDoctors.map((doctor, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={`http://localhost:3000${doctor.photo}`}
                    alt={doctor.name}
                    width="50"
                    height="50"
                    className="doctorPhoto"
                  />
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <button onClick={() => deleteDoctor(startIndex + index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={goToPrevPage} disabled={currentPage === 1}>Previous</button>
          <span>{`${currentPage} of ${totalPages}`}</span>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfessionals;