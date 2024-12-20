import React, { useState } from "react";
import './LoginPopup.css';

const LoginPopup = ({ closePopup, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                onLoginSuccess(data.user); // Notify parent about successful login
            } else {
                setError(data.message);
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Unable to login. Please try again.');
        }
    };

    return (
        <div className="loginPopup">
            <div className="popupContainer">
                <button className="closeButton" onClick={closePopup}>×</button>
                <h1>Login</h1>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="inputGroup">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="registerButton">Login</button>
                </form>
            </div>
        </div>
    );
};


export default LoginPopup;
