import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './Navigation/MyDrawer';
import { styles } from './Style/Styles';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <MyDrawer />
    </NavigationContainer>
  );
};