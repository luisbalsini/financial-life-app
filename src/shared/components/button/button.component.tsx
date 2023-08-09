import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ContainerButton } from './button.style';
import Text from '../text/text.component';

interface ButtonPros extends TouchableOpacityProps {
  title: string;
  margin?: string;
  color?: string;
  onPress: () => void;
}

const Button = ({ title, margin, color, onPress, ...props }: ButtonPros) => {
  const handleOnPress = () => {
    if (onPress) {
      console.log('entrei aqui');
      onPress();
    }
  };

  return (
    <ContainerButton {...props} color={color} margin={margin} onPress={handleOnPress}>
      <Text>{title}</Text>
    </ContainerButton>
  );
};

export default Button;
