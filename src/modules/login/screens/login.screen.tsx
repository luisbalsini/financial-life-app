import React from 'react';
import { View } from 'react-native';
import { ContainerLogin, DisplayLoginColumn } from './login.style';
import Input from '../../../shared/components/input/input.component';
import Button from '../../../shared/components/button/button.component';
import {
  ContainerDisplay,
  ContainerSafeViewArea,
} from '../../../shared/components/view/view.style';

const Login = () => {
  return (
    <ContainerSafeViewArea>
      <ContainerLogin>
        <DisplayLoginColumn>
          <View>
            <Input title="Login" />
            <Input title="Senha" />
          </View>
          <ContainerDisplay alignItems="flex-end">
            <Button title="Acessar" onPress={() => console.log('Entrei')} />
          </ContainerDisplay>
        </DisplayLoginColumn>
      </ContainerLogin>
    </ContainerSafeViewArea>
  );
};

export default Login;
