import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {MainNavigatorStackParamList} from './MainNavigator.types';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import {Colors} from '../styles/Colors';

const Drawer = createDrawerNavigator<MainNavigatorStackParamList>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: Colors.primary,
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        drawerActiveBackgroundColor: Colors.secondary,
        drawerActiveTintColor: Colors.primary,
        drawerStyle: {backgroundColor: Colors.primary},
      }}>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
