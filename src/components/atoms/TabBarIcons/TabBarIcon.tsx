import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

interface IIconProps {
  color: string;
  size: number;
}

export const homeIcon = ({color, size}: IIconProps) => (
  <Icon name="home-outline" color={color} size={size} />
);

export const postIcon = ({color, size}: IIconProps) => (
  <Icon name="add-outline" color={color} size={size} />
);

export const profileIcon = ({color, size}: IIconProps) => (
  <Icon name="person-outline" color={color} size={size} />
);
