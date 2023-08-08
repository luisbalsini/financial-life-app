import React, { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native/types';
import { ContainerText } from './text.style';
import { textTypes } from './text.type';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
  margin?: string;
}

const Text = ({ color, margin, type, ...props }: TextProps) => {
  const FontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_REGULAR:
        return '24px';
      case textTypes.SUB_TITLE_REGULAR:
        return '20px';
      case textTypes.PARAGRAPH_REGULAR:
        return '14px';
      case textTypes.PARAGRAPH_SMALL_REGULAR:
        return '10px';
      case textTypes.BUTTON_REGULAR:
        return '18px';
      default:
        return '14px';
    }
  }, [type]);

  return <ContainerText margin={margin} color={color} fontSize={FontSize} {...props} />;
};

export default Text;
