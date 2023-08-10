import React from 'react';
import { SafeAreaView } from 'react-native';
import { ContainerLogin, DisplayLoginColumn } from './login.style';
import Input from '../../../shared/components/input/input.component';
import Button from '../../../shared/components/button/button.component';

const Login = () => {
  return (
    <SafeAreaView style={{ height: '100%', width: '100%' }}>
      <ContainerLogin>
        <DisplayLoginColumn>
          <Input />
          <Input />
          <Button title="Acessar" onPress={() => console.log('Entrei')} />
        </DisplayLoginColumn>
      </ContainerLogin>
    </SafeAreaView>
  );
};

export default Login;
