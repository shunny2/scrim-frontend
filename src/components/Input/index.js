import React from 'react';
import * as S from './styles';

const Input = ({ type, name, placeholder, value, onChange }) => {
    return (
        <S.Input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;