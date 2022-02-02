import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [name, setName] = useState('');
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }
    } = e;
    setName(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  const Main = styled.div`
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.bgColor};
  `;

  return (
    <Main>
      <h1>What's your name?</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={name} onChange={onChange} />
        <button>확인</button>
      </form>
    </Main>
  );
}

export default App;
