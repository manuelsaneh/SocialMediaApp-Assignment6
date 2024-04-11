import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/Colors';
import CustomButton from '../../components/atoms/buttons/CustomButton';
import {logout} from '../../utils/slices/authSlice';
import {useAppDispatch} from '../../utils/hooks/hooks';
import DropDownTheme from '../../components/organisms/DropDownTheme';
import DropDownEditUser from '../../components/organisms/DropDownEditUser';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <ScrollView style={styles.root}>
      <DropDownTheme />
      <DropDownEditUser />
      <View style={styles.divider} />
      <CustomButton title="Sign Out" onPress={handleSignOut} />
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 30,
  },

  themeDropDown: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 30,
  },

  innerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },

  divider: {
    borderWidth: 2,
    borderColor: Colors.secondary,
    marginVertical: 30,
  },
});
