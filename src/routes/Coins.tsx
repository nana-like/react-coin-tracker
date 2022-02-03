import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Container = styled.div`
  padding: 3rem;
  max-width: 64rem;
  margin: 0 auto;
  box-sizing: border-box;
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
    display: flex;
    align-items: center;
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

const Img = styled.img`
  display: block;
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 1rem;
`;

const Loader = styled.div`
  font-size: 3vmin;
  color: #fff;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins');
      const json = await response.json();
      setCoins(json.slice(0, 30));
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>MyCoin</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {coins.map((coin, i) => (
            <CoinItem key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name}
              </Link>
            </CoinItem>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;
