import React from 'react';
import { SafeAreaView } from 'react-native';
import { ContainerLogin } from './login.style';
import Text from '../../../shared/components/text/text.component';
import { theme } from '../../../shared/themes/themes';
import Button from '../../../shared/components/button/button.component';
import { textTypes } from '../../../shared/components/text/text.type';

const Login = () => {
  return (
    <SafeAreaView style={{ height: '100%', width: '100%' }}>
      <ContainerLogin>
        <Text color={theme.colors.blueTheme.blueHigh} type={textTypes.TITLE_REGULAR}>
          Ola Mundo
        </Text>
        <Button
          title="Clique aqui"
          onPress={() => {
            console.log('Action');
          }}
        />
      </ContainerLogin>
    </SafeAreaView>
  );
};

export default Login;
