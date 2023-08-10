import styled from 'styled-components/native';
import { theme } from '../../themes/themes';

export const ContainerInput = styled.TextInput`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  border-radius: 4px;
  border: black;
  color: ${theme.colors.basicTheme.black};
`;
