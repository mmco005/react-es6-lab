import React from 'react';

function App() {
  // ES6 Examples
  const names = ['Alice', 'Bob', 'Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled:', doubled);

  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  return (
    <div>
      <h1>React Lab</h1>
    </div>
  );
}
export default App;