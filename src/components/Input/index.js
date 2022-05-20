import React, { forwardRef } from 'react';
import * as S from './styles';

const Input = ((props, ref) => {
    return (
        <S.Input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            {...ref}
        />
    );
})

export default forwardRef(Input);