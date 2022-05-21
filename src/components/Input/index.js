import React, { forwardRef } from 'react';
import * as S from './styles';

const Input = ((props, ref) => {
    return (
        <S.Input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            min={props.min}
            max={props.max}
            step={props.step}
            {...ref}
        />
    );
})

export default forwardRef(Input);