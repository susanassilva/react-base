import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    navigate('/login');
  };
  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleOnSubmit}>
        <input name="name" />
        <input name="email" />
        <input name="password" />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/login">Já possui uma conta? Faça o login</Link>
    </div>
  );
};

export default RegisterPage;
