import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import Header from '../../components/Header';

import * as S from './styles';
import More from '../../assets/more.png';

import api from '../../services/api';

function ViewMore() {
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {

    api.get(`game/${id}`)
      .then((response) => {
        setGame(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })

  }, [id]);

  return (
    <>
      <Header />

      <S.Main>
        <S.Content>
          <S.Card>
            <S.Header>
              <S.H2>{game.name}</S.H2>
              <S.H2>{verifyCost(game.cost)}</S.H2>
              <S.Image src={More} alt='more' />
            </S.Header>

            <S.Line></S.Line>

            <S.Description>{game.description}</S.Description>
          </S.Card>
        </S.Content>
      </S.Main>
    </>
  )
}

export default ViewMore;

const verifyCost = (cost) => (String(cost).includes('0.00') ? 'Gratuito.' : 'R$ ' + (Number(cost).toFixed(2)).replace('.', ','));