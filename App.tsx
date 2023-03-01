/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the Redux TypeScript template
 * https://github.com/rahsheen/react-native-template-redux-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { appStyles } from './src/components/styles/AppStyles';
import { GoalList } from './src/components/GoalList';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={appStyles.container}>
          <GoalList />
          <View style={appStyles.appNavbar}>
            <Navbar />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
