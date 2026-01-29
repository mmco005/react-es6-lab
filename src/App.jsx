import React from 'react';
import UserList from './UserList';
import Counter from './Counter';
import UserAPI from './UserAPI';

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];
  const isLoggedIn = false;

  return (
    <div>
      <h1>React Lab</h1>
      {/* Conditional Rendering */}
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}

      <Counter />
      <UserList users={users} />

      <h2>API Data:</h2>
      <UserAPI />
    </div>
  );
}
export default App;