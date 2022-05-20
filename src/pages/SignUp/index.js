import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as S from './styles';

import api from '../../services/api';

const SignUp = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validation)
  });

  let navigate = useNavigate();

  const userRegister = async (data) => {
    try {
      const response = await api.post('user', data);

      navigate('/home');

      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Header page={'signUp'} />

      <S.Container>
        <S.Content>
          <S.H1>Cadastro</S.H1>
          <S.Form onSubmit={handleSubmit(userRegister)}>
            <S.ContentFields>
              <Input
                type="text"
                name="name"
                placeholder="Nome"
                ref={register('name')}
              />
              <S.labelError>{errors.name?.message}</S.labelError>
            </S.ContentFields>
            <S.ContentFields>
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                ref={register('email')}
              />
              <S.labelError>{errors.email?.message}</S.labelError>
            </S.ContentFields>
            <S.ContentFields>
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                ref={register('password')}
              />
              <S.labelError>{errors.password?.message}</S.labelError>
            </S.ContentFields>
            <S.ContentFields>
              <Input
                type="password"
                name="password_confirmation"
                placeholder="Confirme sua senha"
                ref={register('password_confirmation')}
              />
              <S.labelError>{errors.password_confirmation?.message}</S.labelError>
            </S.ContentFields>
            <Button Text="Registrar-se" Type="submit" />
          </S.Form>
        </S.Content>
      </S.Container>
    </>
  );
}

export default SignUp;

const validation = yup.object().shape({
  name: yup
    .string()
    .required('O campo nome é obrigatório.')
    .min(4, 'O campo nome deve ter pelo menos 4 caracteres.')
    .max(80, 'O campo nome deve ter no máximo 80 caracteres.'),
  email: yup
    .string()
    .email('O campo e-mail é inválido.')
    .required('O campo e-mail é obrigatório.'),
  password: yup
    .string()
    .required('O campo senha é obrigatório.')
    .min(8, 'O campo senha deve ter ao menos 8 caracteres.'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Os campos de senha e confirme senha devem ser iguais.')
});