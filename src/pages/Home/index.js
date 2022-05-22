import React from 'react';
import { Link } from "react-router-dom";

import HeaderMain from '../../components/HeaderMain';

import * as S from './styles';
import More from '../../assets/more.png';

import Loading from '../../assets/loading.gif';

import api from '../../services/api';
import { useQuery, useQueryClient } from 'react-query';
import Footer from '../../components/Footer';

function Home() {
  const { data: games, isFetching } = useQuery('games', async () => {
    const response = await api.get('game');

    return response.data;
  });

  const queryClient = useQueryClient();

  const deleteGame = (id) => {
    api.delete(`game/${id}`)
      .then(() => {
        queryClient.invalidateQueries(['games']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <HeaderMain />

      <S.Main>
        <S.Content>
          {
            isFetching &&
            <S.Loading>
              <S.Image src={Loading} style={{ width: '7%' }} alt="loading" />
            </S.Loading>
          }
          
          {games?.map((game, key) => {
            return (
              <S.Card key={key}>
                <S.Header>
                  <S.H2>{formatTitle(game.name)}</S.H2>
                  <S.H2>{verifyCost(game.cost)}</S.H2>
                  <S.Image src={More} alt='more' />
                </S.Header>

                <S.Line></S.Line>

                <S.Description>{formatDescription(game.description)}</S.Description>

                <S.Buttons>
                  <Link to={{ pathname: `/view-more/${game.id}` }}>
                    <S.Button name="btn-view">Vizualizar</S.Button>
                  </Link>
                  <Link to={{ pathname: `/form/edit/${game.id}` }}>
                    <S.Button name="btn-edit">Editar</S.Button>
                  </Link>
                  <S.Button name="btn-delete" onClick={() => deleteGame(game.id)}>Excluir</S.Button>
                </S.Buttons>
              </S.Card>
            )
          })}
        </S.Content>
      </S.Main>

      <Footer />
    </>
  )
}

export default Home;

const verifyCost = (cost) => (cost.includes('0.00') ? 'Gratuito.' : 'R$ ' + (Number(cost).toFixed(2)).replace('.', ','));
const formatTitle = (text) => (text.length > 20 ? text.substring(0, 20) + '...' : text);
const formatDescription = (text) => (text.includes('.') ? text.substring(0, text.indexOf('.')) + '...' : text.substring(0, 44) + '...');