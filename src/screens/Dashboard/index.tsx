import React from 'react';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/49494932?v=4'}} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Matheus</UserName>
            </User>
          </UserInfo>

          <Icon name='power' />
        </UserWrapper>
      </Header>
    </Container>
  );
}