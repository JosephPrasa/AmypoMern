import React from 'react'

function Settings({ user }) {
  return (
    <div>
      <h2>Settings</h2>
      <p>Manage settings for {user.name}</p>
    </div>
  );
}

export default Settings;