import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 3rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 1.5rem;
`;

const Title = styled.h1`
  font-size: 4.8rem;
  color: ${(props) => props.theme.accentColor};
`;

const CoinList = styled.ul``;

const CoinItem = styled.li`
  margin: 2rem 0;
  color: ${(props) => props.theme.bgColor};
  font-size: 2rem;

  a {
    display: block;
    padding: 2rem;
    background-color: #fafafa;
    border-radius: 0.3rem;
    transition: all 0.2s ease-in;

    &:hover {
      color: #fff;
      background-color: ${(props) => props.theme.accentColor};
    }
  }
`;

const coins = [
  {
    id: 'btc-bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    is_new: false,
    is_active: true,
    type: 'coin'
  },
  {
    id: 'eth-ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    rank: 2,
    is_new: false,
    is_active: true,
    type: 'coin'
  },
  {
    id: 'hex-hex',
    name: 'HEX',
    symbol: 'HEX',
    rank: 3,
    is_new: false,
    is_active: true,
    type: 'token'
  }
];

function Coins() {
  return (
    <Container>
      <Header>
        <Title>MyCoin</Title>
      </Header>
      <CoinList>
        {coins.map((coin, i) => (
          <CoinItem key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name}</Link>
          </CoinItem>
        ))}
      </CoinList>
    </Container>
  );
}

export default Coins;
