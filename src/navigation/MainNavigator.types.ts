import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainNavigatorStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Feed: undefined;
  Post: undefined;
  Person: undefined;
  Profile: undefined;
  Settings: undefined;
  Drawer: undefined;
  Tab: undefined;
};

export type MainNavigatorNavigationProp =
  NativeStackNavigationProp<MainNavigatorStackParamList>;

export type MainNavigatorRouteProp = RouteProp<MainNavigatorStackParamList>;
