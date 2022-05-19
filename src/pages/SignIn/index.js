import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import * as S from './styles';

import api from '../../services/api';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  let navigate = useNavigate();

  const login = async () => {
    if (email !== '' && password !== '') {
      try {
        const response = await api.post('user', {
          email: email,
          password: password
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

  return (
    <S.Container>
      <S.Content>
        <S.H1>Login</S.H1>
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
        <Button Text="Entrar" onClick={login} Type="submit"/>
        <S.LabelSignUp>
          Não tem um conta?
          <S.Strong>
            <Link to="/signUp">&nbsp;Registre-se.</Link>
          </S.Strong>
        </S.LabelSignUp>
      </S.Content>
    </S.Container>
  );
}

export default SignIn;