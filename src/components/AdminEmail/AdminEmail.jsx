import React, { useEffect, useState } from 'react';
import './AdminEmail.css';

const AdminEmail = () => {
    const [emails, setEmails] = useState([]);
    const [selectedEmails, setSelectedEmails] = useState([]);
    const [emailText, setEmailText] = useState('');

    // Завантаження email-адрес
    useEffect(() => {
        fetch('http://localhost:3000/emails')
            .then((response) => response.json())
            .then((data) => setEmails(data))
            .catch((err) => console.error('Не вдалося отримати email:', err));
    }, []);

    // Обробка вибору email
    const toggleEmailSelection = (email) => {
        setSelectedEmails((prev) =>
            prev.includes(email)
                ? prev.filter((item) => item !== email)
                : [...prev, email]
        );
    };

    // Вибір усіх email
    const selectAllEmails = () => {
        setSelectedEmails(emails.map((email) => email.email));
    };

    // Скасування вибору всіх email
    const deselectAllEmails = () => {
        setSelectedEmails([]);
    };

    // Обробка розсилки
    const handleSendEmails = () => {
        if (selectedEmails.length === 0) {
            alert('Оберіть хоча б один email для розсилки.');
            return;
        }
        if (!emailText) {
            alert('Введіть текст для розсилки.');
            return;
        }

        fetch('http://localhost:3000/send-emails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                recipients: selectedEmails,
                text: emailText,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message || 'Розсилку надіслано!');
                setSelectedEmails([]);
                setEmailText('');
            })
            .catch((err) => {
                console.error('Помилка при розсилці:', err);
                alert('Не вдалося надіслати розсилку.');
            });
    };

    return (
        <div className="AdminEmail">
            <h3>Розсилка по Email</h3>

            <div className="AdminEmail__controls">
                <button onClick={selectAllEmails}>Вибрати всі</button>
                <button onClick={deselectAllEmails}>Скасувати вибір</button>
            </div>

            <div className="AdminEmail__list-container">
                <ul>
                    {emails.map((email, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                checked={selectedEmails.includes(email.email)}
                                onChange={() => toggleEmailSelection(email.email)}
                            />
                            {email.email}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="AdminEmail__action-panel">
                <input
                    type="text"
                    placeholder="Введіть текст для розсилки"
                    value={emailText}
                    onChange={(e) => setEmailText(e.target.value)}
                />
                <button onClick={handleSendEmails}>Надіслати</button>
            </div>
        </div>
    );
};

export default AdminEmail;
