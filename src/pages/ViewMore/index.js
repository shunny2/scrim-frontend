import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import Header from '../../components/Header';

import './index.css';
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

      <main>
        <div className='cards'>
          <div className='card'>
            <header>
              <h2>{game.name}</h2>
              <h2>{verifyCost(game.cost)}</h2>
              <img src={More} alt='more' />
            </header>

            <div className='line'></div>

            <p>{game.description}</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default ViewMore;

const verifyCost = (cost) => (String(cost).includes('0.00') ? 'Gratuito.' : 'R$ ' + (Number(cost).toFixed(2)).replace('.', ','));