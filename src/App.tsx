import React from 'react';
import Text from './shared/components/text/text.component';
import { textTypes } from './shared/components/text/text.type';

const App = () => {
  return (
    <Text color="#FFF009" type={textTypes.TITLE_REGULAR}>
      Ola Mundo
    </Text>
  );
};

export default App;
