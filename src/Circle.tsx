import styled from 'styled-components';

interface CircleProps {
  bgColor: string;
}

const Container = styled.div<CircleProps>`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
