import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Login');
    navigate('/lobby');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleOnSubmit}>
        <input name="email" />
        <input name="senha" />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/register">Não possui uma conta? Cadastre-se</Link>
    </div>
  );
};

export default LoginPage;
