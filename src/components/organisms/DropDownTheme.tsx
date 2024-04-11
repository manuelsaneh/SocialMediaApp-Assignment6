import {
  Animated,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../styles/Colors';

const DropDownTheme = () => {
  const [showMoreTheme, setShowMoreTheme] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const toggleDropDownTheme = () => {
    Animated.timing(animatedValue, {
      toValue: showMoreTheme ? 0 : 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setShowMoreTheme(!showMoreTheme);
  };

  const animatedRotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <>
      <Pressable onPress={toggleDropDownTheme}>
        <View style={styles.dropDown}>
          <Text style={styles.text}>Theme</Text>
          <Animated.View style={{transform: [{rotate: animatedRotation}]}}>
            <Icon name="chevron-down-outline" size={20} />
          </Animated.View>
        </View>
      </Pressable>
      {showMoreTheme && (
        <View style={styles.themeDropDown}>
          <Text style={styles.innerText}>Dark Mode</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      )}
    </>
  );
};

export default DropDownTheme;

const styles = StyleSheet.create({
  dropDown: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 30,
  },
  themeDropDown: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 30,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  innerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
});
