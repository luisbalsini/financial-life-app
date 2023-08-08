import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  fontSize: string;
  margin?: string;
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${({ ...props }) => (props.color ? `color: ${props.color};` : '')}
  ${({ ...props }) => (props.margin ? `margin: ${props.margin};` : '')}

  font-size : ${({ ...props }) => props.fontSize};
  padding-top: 3px;
`;
