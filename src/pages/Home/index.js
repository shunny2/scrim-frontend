import React from 'react';
import { Link } from "react-router-dom";

import HeaderMain from '../../components/HeaderMain';

import './index.css';
import More from '../../assets/more.png';

import api from '../../services/api';
import { useQuery, useQueryClient } from 'react-query';

function Home() {
  const { data: games, isFetching } = useQuery('games', async () => {
    const response = await api.get('');

    return response.data;
  });

  const queryClient = useQueryClient();

  const deleteGame = (id) => {
    api.delete(`${id}`)
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

      <main>
        <div className='cards'>
          {isFetching && <p>Carregando...</p>}
          {games?.map((game, key) => {
            return (
              <div className='card' key={key}>
                <header>
                  <h2>{game.name}</h2>
                  <h2>{verifyCost(game.cost)}</h2>
                  <img src={More} alt='more' />
                </header>

                <div className='line'></div>

                <p>{formatText(game.description)}</p>

                <div className='btns'>
                  <div className='btn-view'>
                    <Link to={{ pathname: `/view-more/${game.id}` }}>
                      <button>Vizualizar</button>
                    </Link>
                  </div>
                  <div className='btn-edit'>
                    <Link to={{ pathname: `/form/edit/${game.id}` }}>
                      <button>Editar</button>
                    </Link>
                  </div>
                  <div className='btn-delete'>
                    <button onClick={() => deleteGame(game.id)}>Excluir</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Home;

const verifyCost = (cost) => (cost.includes('0.00') ? 'Gratuito.' : 'R$ ' + (Number(cost).toFixed(2)).replace('.', ','));
const formatText = (text) => (text.includes('.') ? text.substring(0, text.indexOf('.')) + '...' : text.substring(0, 58) + '...');