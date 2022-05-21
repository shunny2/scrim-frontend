import React, { forwardRef } from 'react';
import * as S from './styles';

const TextArea = ((props, ref) => {
    return (
        <S.TextArea
            type={props.type}
            name={props.name}
            rows={props.rows}
            cols={props.cols}
            placeholder={props.placeholder}
            min={props.min}
            max={props.max}
            step={props.step}
            {...ref}
        ></S.TextArea>
    );
})

export default forwardRef(TextArea);