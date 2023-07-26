// Add bottom navigation & modal navigation
// bottom navigation > ...
// modal navigation > bookinginit
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TermsAndConditions from '../screens/TermsAndConditions';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({header: () => null})}
      initialRouteName="TermsAndConditions">
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
