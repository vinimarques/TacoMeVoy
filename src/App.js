import GlobalStyle from '@assets/style/globalStyle';

import {
  Wrapper,
  HeaderWrapper,
  Header,
  Title,
  Image,
  WrapperFilter,
} from './style';

import Data from '@assets/data.json';
import Logo from '@assets/img/logo.png';
import List from '@molecules/List';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState(Data);

  useEffect(() => {
    const add = Data.filter(i => i.description.toLowerCase().match(value.toLowerCase()));
    setList(add);
  }, [value]);

  return (
    <Wrapper>
      <GlobalStyle />
      <HeaderWrapper>
        <Header>
          <Image src={Logo} alt="Taco Me Voy!" />
          <Title>Taco Me Voy!</Title>
        </Header>
        <WrapperFilter>
          <input value={value} onChange={ev => setValue(ev.target.value)} type="text" placeholder="Busque pelo nome do alimento" />
        </WrapperFilter>
      </HeaderWrapper>
      <List data={list} />
    </Wrapper>
  );
}

export default App;
