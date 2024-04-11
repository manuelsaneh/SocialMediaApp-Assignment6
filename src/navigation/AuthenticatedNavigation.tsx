import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FeedScreen from '../screens/FeedScreen/FeedScreen';
import {MainNavigatorStackParamList} from './MainNavigator.types';
import {Colors} from '../styles/Colors';
import AddPostScreen from '../screens/AddPostScreen/AddPostScreen';
import DrawerNavigation from './DrawerNavigation';
import {
  homeIcon,
  postIcon,
  profileIcon,
} from '../components/atoms/TabBarIcons/TabBarIcon';

const Tab = createBottomTabNavigator<MainNavigatorStackParamList>();

const AuthenticatedNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.primary,
        tabBarActiveBackgroundColor: Colors.secondary,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerTintColor: Colors.primary,
          headerStyle: {
            height: 100,
            backgroundColor: Colors.secondary,
          },
          tabBarIcon: homeIcon,
        }}
      />
      <Tab.Screen
        name="Post"
        component={AddPostScreen}
        options={{
          headerShown: false,
          tabBarIcon: postIcon,
        }}
      />
      <Tab.Screen
        name="Person"
        component={DrawerNavigation}
        options={{
          headerShown: false,
          tabBarIcon: profileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthenticatedNavigation;
