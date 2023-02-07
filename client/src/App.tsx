import { useEffect, useState } from 'react';
import './App.css';
import { addUser, deleteUser, getUsers } from './requests/userRequests';

function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [UserInput, setUserInput] = useState<string>('');

  const initUsers = async () => {
    const usersRes = await getUsers();
    setUsers(usersRes);
  };

  const handleAddUser = async (e: any) => {
    e.preventDefault();
    await addUser(UserInput);
    await initUsers();
    setUserInput('');
  };

  const handleDeleteUser = async (user: { id: string; name: string }) => {
    await deleteUser(user.id);
    console.log(`deleted user ${user.name}`);
    await initUsers();
  };

  useEffect(() => {
    initUsers();
  }, []);

  return (
    <div className="App">
      <h1>Welcome</h1>

      <h2>Go ahead and add a user</h2>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Write name"
          value={UserInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input type="submit" />
      </form>

      <h2>Here are all the users:</h2>
      {users.map((user, i) => (
        <h4 key={i}>
          {user.name}
          <button onClick={() => handleDeleteUser(user)}>DELETE</button>
        </h4>
      ))}
    </div>
  );
}

export default App;
