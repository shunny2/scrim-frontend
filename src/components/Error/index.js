import React from 'react';
import * as S from './styles';

const Error = (props) => {
    const { error, children } = props;
    return (
        error ? <S.Error>{children}</S.Error> : null
    )
}

export default Error;