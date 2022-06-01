import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as S from './styles';
import Loading from '../../assets/loading.gif';

import api from '../../services/api';

const ViewMore = () => {
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {

    setLoading(true);
    api.get(`game/${id}`)
      .then((response) => {
        setGame(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [id]);

  return (
    <>
      <Header />

      <S.Main>
        {loading &&
          <S.Loading>
            <S.Image src={Loading} alt="loading" />
          </S.Loading>
        }

        {!loading &&
          <S.Content>
            <S.Card>
              <S.Header>
                <S.H2>{game.name}</S.H2>
                <S.H2>{verifyCost(game.cost)}</S.H2>
              </S.Header>

              <S.Line></S.Line>

              <S.Description>{game.description}</S.Description>
            </S.Card>
          </S.Content>
        }
      </S.Main>

      <Footer />
    </>
  )
}

export default ViewMore;

const verifyCost = (cost) => (String(cost).includes('0.00') ? 'Gratuito.' : 'R$ ' + (Number(cost).toFixed(2)).replace('.', ','));