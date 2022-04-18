import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

const RegisterPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: 'Susana Silva',
      email: 'susana@susana.com',
      password: '',
    },
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    navigate('/login');
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Controller
          control={control}
          name="name"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <input name={name} onChange={onChange} value={value} type="name" />
            );
          }}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <input name={name} onChange={onChange} value={value} type="email" />
            );
          }}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <input name={name} onChange={onChange} value={value} type="password" maxLength={4} />
            );
          }}
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/login">Já possui uma conta? Faça o login</Link>
    </div>
  );
};

export default RegisterPage;
