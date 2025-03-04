import React, { useState } from 'react';
import styled from 'styled-components';

import { Counter, Panel, Button } from 'react95';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
  .counter-wrapper {
    display: flex;
    margin-top: 1rem;
  }
  .counter-wrapper button {
    margin-left: 0.5rem;
    height: 51px;
  }
  .wrapper {
    padding: 1rem;
  }
`;

export default {
  title: 'Counter',
  component: Counter,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export const Default = () => {
  const [count, setCount] = useState(13);
  const handleClick = () => setCount(count + 1);
  return (
    <Panel className='wrapper'>
      <Counter value={123456789} minLength={11} size='lg' />

      <div className='counter-wrapper'>
        <Counter value={count} minLength={3} />
        <Button onClick={handleClick}>Click!</Button>
      </div>
    </Panel>
  );
};

Default.story = {
  name: 'default'
};
