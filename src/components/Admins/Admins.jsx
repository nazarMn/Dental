import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Admins.css';

const Admins = () => {
  return (
    <div className="admins-container">
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <ul>
          <li>
            <NavLink
              to="dashboard"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="users"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="settings"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admins;
