import React, { useState } from "react";
import "./SettingsPopup.css";

const SettingsPopup = ({ user, closePopup, onSaveSettings }) => {
    const [name, setName] = useState(user?.name || "");
    const [photo, setPhoto] = useState(null); // Store the file instead of URL

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleSave = async () => {
        if (name.trim() === "") {
            alert("Name cannot be empty.");
            return;
        }

        // Create FormData to handle the file upload
        const formData = new FormData();
        formData.append("name", name);
        formData.append("photo", photo);

        // Call the API to save settings
        try {
            await onSaveSettings(formData);
            closePopup();
        } catch (error) {
            alert("Error saving settings.");
        }
    };

    return (
        <div className="settingsPopup">
            <div className="popupContent">
                <h2>Settings</h2>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </label>
                <label>
                    Profile Picture:
                    <input
                        type="file"
                        onChange={handleFileChange}
                    />
                </label>
                <div className="actions">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={closePopup}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPopup;
