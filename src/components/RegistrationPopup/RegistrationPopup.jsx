// Frontend: RegistrationPopup.js
import React, { useState } from "react";
import './RegistrationPopup.css';

const RegistrationPopup = ({ closePopup }) => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        photo: null, // додано поле для фото
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('surname', formData.surname);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('password', formData.password);
        if (formData.photo) {
            formDataToSend.append('photo', formData.photo);
        }

        try {
            const response = await fetch('/register', {
                method: 'POST',
                body: formDataToSend,
            });

            const data = await response.json();
            if (response.ok) {
                setSuccess(data.message);
                setFormData({ name: '', surname: '', email: '', password: '', photo: null });
            } else {
                setError(data.message);
            }
        } catch (err) {
            console.error('Помилка при реєстрації:', err);
            setError('Не вдалося зареєструватися. Спробуйте ще раз.');
        }
    };

    return (
        <div className="registrationPopup">
            <div className="popupContainer">
                <button className="closeButton" onClick={closePopup}>×</button>
                <h1>Register</h1>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="inputGroup">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="surname"
                            placeholder="Surname"
                            value={formData.surname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="inputGroup">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <input
                            type="file"
                            name="photo"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                    </div>
                    <button className="registerButton">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPopup;
