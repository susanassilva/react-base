import { Link } from 'react-router-dom';

const LobbyPage = () => (
  <div>
    <h1>Lobby</h1>
    <h3>Olá, usuário!</h3>
    <ul>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/"> Sair </Link>
      </li>
    </ul>
  </div>
);

export default LobbyPage;
