import styled from 'styled-components/native';

interface ContainerButtonProps {
  margin?: string;
  color?: string;
}

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
  width: 100px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background-color: #104877;
  border-radius: 4px;
  margin-top: 7px;

  ${({ ...props }) => (props.color ? `color: ${props.color};` : '')}
  ${({ ...props }) => (props.margin ? `margin:${props.margin};` : '')};
`;
