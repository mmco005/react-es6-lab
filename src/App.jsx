import React from 'react';
import UserList from './UserList'; // Import added

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <h1>React Lab</h1>
      <UserList users={users} />
    </div>
  );
}
export default App;