import { Link } from 'react-router-dom';

const UsersPage = () => {
  const users = [
    {
      id: 0,
      name: 'Susana',
      email: 'susana@teste.com',
    },
    {
      id: 1,
      name: 'Joana',
      email: 'joana@teste.com',
    },
    {
      id: 2,
      name: 'Catarina',
      email: 'catarina@teste.com',
    },
  ];

  const usersMap = users.map((user) => {
    const key = `user.${user.id}`;
    return (
      <li key={key}>
        <p>{user.name}</p>
      </li>
    );
  });

  return (
    <div>
      <h1>Users</h1>
      <div>
        <Link to="/lobby">Lobby</Link>
      </div>
      <div>
        <ul>
          {usersMap}
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;
