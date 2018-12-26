import React from 'react';
import propTypes from 'prop-types';

const SideBar = ({ users }) => (
  <aside id='sidebar'>
    <ul>
      {
        users.map(user => <li key={user.id}>{user.name}</li>)
      }
    </ul>
  </aside>
);

SideBar.propTypes = {
  users: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default SideBar;