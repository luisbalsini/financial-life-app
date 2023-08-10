import React from 'react';
import Text from '../text/text.component';
import { theme } from '../../themes/themes';
import { textTypes } from '../text/text.type';
import { ContainerInput } from './input.style';

const Input = () => {
  return (
    <>
      <Text
        margin="0 0 0 0"
        color={theme.colors.basicTheme.black}
        type={textTypes.PARAGRAPH_REGULAR}
      >
        Login
      </Text>
      <ContainerInput />
    </>
  );
};

export default Input;
