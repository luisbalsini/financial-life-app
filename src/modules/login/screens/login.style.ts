import styled from 'styled-components/native';
import { theme } from '../../../shared/themes/themes';

export const ContainerLogin = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px;
  flex: 1;
  background-color: ${theme.colors.basicTheme.ice};
`;

export const DisplayLoginColumn = styled.View`
  width: 78%;
  display: flex;
  flex-direction: column;
`;
