import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import api from '../../services/api';

function Register() {
    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    });

    const create = async (data) => {
        try {
            const response = await api.post('game', data);

            navigate('/home');

            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <Header />

            <S.Main>
                <S.Content>
                    <S.H1>Scrim Formulário</S.H1>
                    <S.Form onSubmit={handleSubmit(create)}>
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
                                type="number"
                                name="cost"
                                min="0" max="100000000000" step=".001"
                                placeholder="Preço"
                                ref={register('cost')}
                            />
                            <S.labelError>{errors.cost?.message}</S.labelError>
                        </S.ContentFields>
                        <S.ContentFields>
                            <TextArea
                                type="text"
                                name="description"
                                rows={100}
                                placeholder="Descrição"
                                ref={register('description')}
                            ></TextArea>
                            <S.labelError>{errors.description?.message}</S.labelError>
                        </S.ContentFields>
                        <Button Text="Cadastrar" Type="submit" />
                    </S.Form>
                </S.Content>
            </S.Main>
        </>
    )
}

export default Register;

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