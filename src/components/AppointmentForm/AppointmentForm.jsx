import React, { useState } from 'react';
import './AppointmentForm.css';
import doctor5 from './../../assets/doctor 5.svg';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    phone: '',
    email: '',
    department: '',
    date: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="appointmentBottom">
      <div className="appointmentBottomLeft">
        <h2>Appointment</h2>
        <form className="appointmentForm" onSubmit={handleSubmit}>
          <div className="appointmentFormBox">
            <input
              type="text"
              name="name"
              placeholder="Patient Name"
              value={formData.name}
              onChange={handleChange}
            />
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="appointmentFormBox">
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="appointmentFormBox">
            <select name="department" value={formData.department} onChange={handleChange}>
              <option value="">Department</option>
              <option value="general">General</option>
              <option value="surgery">Surgery</option>
              <option value="pediatrics">Pediatrics</option>
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="appointmentFormBox">
            <textarea
              name="details"
              placeholder="More details"
              value={formData.details}
              onChange={handleChange}
            />
          </div>

          <div className="appointmentFormBtm">
            <div className="appointmentFormBtmBox">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
      <div className="appointmentBottomRight">
        <img src={doctor5} alt="Doctor" />
      </div>
    </div>
  );
}
