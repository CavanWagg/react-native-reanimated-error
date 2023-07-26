import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Switch} from 'react-native-ui-lib';

const ToggleSwitch = ({
  children,
  onToggle,
  disabled,
  checked,
  offColor = 'grey',
}) => {
  return (
    <View style={styles.marginVertical4}>
      <Switch
        testID="acceptSwitch"
        value={checked}
        offColor={offColor}
        onColor={'black'}
        onValueChange={isCheck => onToggle(isCheck)}
        disabled={disabled}>
        {children}
      </Switch>
    </View>
  );
};

export default ToggleSwitch;

const styles = StyleSheet.create({
  marginVertical4: {
    marginVertical: 4,
  },
});
