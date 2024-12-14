import React, { useEffect, useState } from 'react';
import './AdminEmail.css';

const AdminEmail = () => {
    const [emails, setEmails] = useState([]);
    const [filteredEmails, setFilteredEmails] = useState([]);
    const [selectedEmails, setSelectedEmails] = useState([]);
    const [emailText, setEmailText] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const emailsPerPage = 5;

    useEffect(() => {
        fetch('http://localhost:3000/emails')
            .then((response) => response.json())
            .then((data) => {
                const validEmails = data.filter((email) => email && email.email);
                setEmails(validEmails);
                setFilteredEmails(validEmails);
            })
            .catch((err) => console.error('Не вдалося отримати email:', err));
    }, []);

    useEffect(() => {
        const lowercasedQuery = searchQuery.toLowerCase();
        const filtered = emails.filter((email) =>
            email.email.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredEmails(filtered);
        setCurrentPage(1);
    }, [searchQuery, emails]);

    const toggleEmailSelection = (email) => {
        setSelectedEmails((prev) =>
            prev.includes(email)
                ? prev.filter((item) => item !== email)
                : [...prev, email]
        );
    };

    const selectAllEmails = () => {
        const startIndex = (currentPage - 1) * emailsPerPage;
        const pageEmails = filteredEmails.slice(startIndex, startIndex + emailsPerPage);
        setSelectedEmails(pageEmails.map((email) => email.email));
    };

    const deselectAllEmails = () => {
        setSelectedEmails([]);
    };

    const handleDeleteEmail = (emailToDelete) => {
        if (window.confirm('Ви впевнені, що хочете видалити цей email?')) {
            fetch(`http://localhost:3000/emails/${emailToDelete}`, {
                method: 'DELETE',
            })
                .then((response) => {
                    if (response.ok) {
                        setEmails((prev) =>
                            prev.filter((email) => email.email !== emailToDelete)
                        );
                        alert('Email видалено успішно');
                    } else {
                        alert('Не вдалося видалити email');
                    }
                })
                .catch((err) => {
                    console.error('Помилка при видаленні:', err);
                    alert('Не вдалося видалити email');
                });
        }
    };
    

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

    const totalPages = Math.ceil(filteredEmails.length / emailsPerPage);
    const startIndex = (currentPage - 1) * emailsPerPage;
    const currentEmails = filteredEmails.slice(startIndex, startIndex + emailsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    return (
        <div className="AdminEmail">
            <h3>Розсилка по Email</h3>
            <div className="AdminEmail__action-panel">
                <textarea
                    placeholder="Введіть текст для розсилки"
                    value={emailText}
                    onChange={(e) => setEmailText(e.target.value)}
                />
                <button onClick={handleSendEmails}>Надіслати</button>
            </div>

            <input
                type="text"
                placeholder="Пошук email"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="AdminEmail__search"
            />

            <div className="AdminEmail__controls">
                <button onClick={selectAllEmails}>Вибрати всі</button>
                <button onClick={deselectAllEmails}>Скасувати вибір</button>
            </div>

            <div className="AdminEmail__list-container">
                <table className="AdminEmail__table">
                    <thead>
                        <tr>
                            <th>Вибір</th>
                            <th>Email</th>
                            <th>Дії</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEmails.map((email, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedEmails.includes(email.email)}
                                        onChange={() => toggleEmailSelection(email.email)}
                                    />
                                </td>
                                <td>{email.email}</td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteEmail(email.email)}
                                    >
                                        Видалити
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="AdminEmail__pagination">
                <button onClick={goToPrevPage} disabled={currentPage === 1}>
                    Попередня
                </button>
                <span>{`${currentPage} із ${totalPages}`}</span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                    Наступна
                </button>
            </div>
        </div>
    );
};

export default AdminEmail;
