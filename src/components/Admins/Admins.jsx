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
              to="AdminProfessionals"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Admin Professionals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="AdminComments"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Admin Comments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="AppointmentsAdmin"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
             Appointments Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="AdminEmail"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
             Admin Email
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
