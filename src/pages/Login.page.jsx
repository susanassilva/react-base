/* eslint-disable react/prop-types */
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import DefaultInput from '../components/DefaultInput';

const LoginPage = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: 'susana@susana.com',
    },
  });

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    navigate('/lobby');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="email" />
            );
          }}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="password" maxLength={4} />
            );
          }}
        />

        <button type="submit">Entrar</button>
      </form>
      <Link to="/register">Não possui uma conta? Cadastre-se</Link>
    </div>
  );
};

export default LoginPage;
