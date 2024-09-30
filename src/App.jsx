import React from 'react';
import Input from './components/UserInput/Input/Input';
import UsersList from './components/UserInput/UsersList/UsersList';



function App() {
  return (
    <div>
    <Input/>
    <UsersList users={[]}/>
    </div>
  );
}

export default App;
