import React from 'react';
import { useState } from 'react';
import Input from './components/UserInput/Input/Input';
import UsersList from './components/UserInput/UsersList/UsersList';




function App() {

  const [users, setUsers] = useState([]);

  
  const addUserHandler = (name, age) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: Math.random().toString(), name: name, age: age }
    ]);
  };

  return (
    <div>
      
    <Input onAddUser={addUserHandler}/>
    <UsersList users={users}/>
    </div>
  );
}

export default App;
