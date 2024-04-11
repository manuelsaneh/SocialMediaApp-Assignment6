import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticatedNavigation from './AuthenticatedNavigation';
import MainStackNavigation from './MainStackNavigation';
import {useAppSelector} from '../utils/hooks/hooks';

const Navigation = () => {
  const isAuthenticated = useAppSelector(state => state.auth.authenticated);

  const linking = {
    prefixes: ['tweety://'],
    config: {
      initialRouteName: 'Welcome' as const,
      screens: {
        Welcome: 'welcome',
        Feed: 'feed',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      {isAuthenticated ? <AuthenticatedNavigation /> : <MainStackNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
