import styled from 'styled-components/native';

interface ContainerDisplayProps {
  margin?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const ContainerSafeViewArea = styled.SafeAreaView`
  height: 100%;
  width: 100%;
`;

export const ContainerDisplay = styled.View<ContainerDisplayProps>`
  ${({ ...props }) => (props.margin ? `color: ${props.margin};` : '')}
  ${({ ...props }) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
  ${({ ...props }) => (props.justifyContent ? `justify-content: ${props.justifyContent};` : '')}
`;
