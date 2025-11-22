import {Text, View} from 'react-native';
import React from 'react';

export const options = {
  title: 'Onboarding',
  headerShown: true,
}

const Onboarding = () => {
  return (
    <View>
      <Text className='text-light-200'>Onboarding</Text>
    </View>
  )
}

export default Onboarding;