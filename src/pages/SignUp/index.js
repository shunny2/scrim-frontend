import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as S from './styles';

import api from '../../services/api';

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  let navigate = useNavigate();

  const register = async () => {
    if (name !== '' && email !== '' && password !== '') {
      try {
        const response = await api.post('user', {
          name: name,
          email: email,
          password: password,
        });

        navigate('/home');

        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setError('Email ou senha inválidos.');
    }
  }

  const validationForm = yup.object().shape({
    name: yup
      .string()
      .required('O campo nome é obrigatório.'),
    email: yup
      .string()
      .email()
      .required('O campo email é obrigatório.'),
    password: yup
      .string()
      .min(8)
      .required('O campo senha é obrigatório.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'As senhas não são iguais.') 
  });

  return (
    <>
      <Header page={'signUp'} />

      <S.Container>
        <S.Content>
          <S.H1>Cadastro</S.H1>
          <S.ContentFields>
            <Input
              type="text"
              name="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => [setName(e.target.value), setError('')]}
            />
            <S.labelError>{error}</S.labelError>
          </S.ContentFields>
          <S.ContentFields>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError('')]}
            />
            <S.labelError>{error}</S.labelError>
          </S.ContentFields>
          <S.ContentFields>
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => [setPassword(e.target.value), setError('')]}
            />
            <S.labelError>{error}</S.labelError>
          </S.ContentFields>
          <S.ContentFields>
            <Input
              type="password"
              name="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => [setConfirmPassword(e.target.value), setError('')]}
            />
          </S.ContentFields>
          <Button Text="Registrar-se" onClick={register} Type="submit" />
        </S.Content>
      </S.Container>
    </>
  );
}

export default SignUp;