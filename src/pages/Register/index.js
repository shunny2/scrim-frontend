import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './index.css';
import Header from '../../components/Header';

import api from '../../services/api';

function Form() {
    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    });

    const create = async (data) => {
        try {
            const response = await api.post('', data);

            navigate('/');

            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <Header />
            <main>
                <div className='card-form'>
                    <h1>Scrim Formulário</h1>
                    <form onSubmit={handleSubmit(create)}>
                        <div className='fields'>
                            <input
                                type='text'
                                name='name'
                                placeholder='Nome'
                                {...register('name')}
                            />
                            <p className='error-message'>{errors.name?.message}</p>
                        </div>
                        <div className='fields'>
                            <input type='number'
                                name='cost'
                                min="0" max="100000000000" step=".001"
                                placeholder='Preço'
                                {...register('cost')}
                            />
                            <p className='error-message'>{errors.cost?.message}</p>
                        </div>
                        <div className='fields'>
                            <textarea
                                type='text'
                                name='description'
                                rows={100}
                                placeholder='Descrição'
                                {...register('description')}
                            ></textarea>
                            <p className='error-message'>{errors.description?.message}</p>
                        </div>
                        <div className='btn-form'>
                            <button>
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Form;

const validation = yup.object().shape({
    name: yup
        .string()
        .required('O campo nome é obrigatório.')
        .min(6, 'O campo nome deve ter pelo menos 6 caracteres.')
        .max(80, 'O campo nome deve ter no máximo 80 caracteres.'),
    cost: yup
        .number()
        .typeError('O campo preço é obrigatório.')
        .positive('O campo preço precisa ser um número positivo.')
        .min(0, 'O campo preço não deve ser negativo.')
        .max(100000000000, 'O campo preço deve ter no máximo 8 casas após a vírgula.'),
    description: yup
        .string()
        .required('O campo descrição é obrigatório.')
        .min(10, 'O campo descrição deve ter pelo menos 10 caracteres.')
        .max(1000, 'O campo descrição deve ter no máximo 1000 caracteres.')
});