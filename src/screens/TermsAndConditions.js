import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import ToggleSwitch from '../components/ToggleSwitch';

const PADDING_TO_BOTTOM = 200;
const PADDING_BOTTOM = 25;
const TermsAndConditions = ({navigation}) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [didReachBottom, setdidReachBottom] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - PADDING_TO_BOTTOM
    );
  };

  const AgreeTermsComponent = () => (
    <View testID="acceptButtonContainer">
      <View style={styles.toggleContainer}>
        <Text>Read </Text>
        <ToggleSwitch
          disabled={!didReachBottom}
          onToggle={isChecked => setIsAccepted(isChecked)}
          checked={isAccepted}
        />
      </View>

      <View style={styles.buttonContainer}>
        {isAccepted && (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <Text>Howdy</Text>
          </Animated.View>
        )}
      </View>
    </View>
  );

  const ScrollToBottomComponent = () => (
    <View style={styles.scrollToAuxContainer}>
      <Text>Scroll to Bottom</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View testID="bottomContainer" style={styles.bottomContainer}>
        <View style={styles.auxContainer}>
          {showScrollBottom ? (
            <ScrollToBottomComponent />
          ) : (
            <AgreeTermsComponent />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#383D40',
    flex: 1,
    paddingTop: 30,
  },
  webView: {
    height: Dimensions.get('screen').height - PADDING_BOTTOM,
  },
  toggleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  bottomContainer: {
    backgroundColor: 'green',
  },
  auxContainer: {
    marginHorizontal: 16,
    paddingBottom: PADDING_BOTTOM,
  },
  scrollToAuxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  iconExpandLess: {
    transform: [{rotate: '180deg'}, {translateY: 0}],
  },
  buttonContainer: {
    height: Dimensions.get('screen').height * 0.05,
  },
});

export default TermsAndConditions;
