//npx react-native start
//npx react-native run-ios
//arch -x86_64 pod install

//xed ios ##opens project in xcode

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


// we will use these two screens later in the Navigator
import LoginScreen from './src/screens/LoginScreen.js';
import CreateAccountScreen from './src/screens/CreateAccountScreen.js';

import HomePageScreen from './src/screens/HomePageScreen.js';

import ServerSelectScreen from './src/screens/ServerSelectScreen.js';
import SelectFileScreen from './src/screens/SelectFileScreen.js';
import ViewSessionScreen from './src/screens/ViewSessionScreen.js';

import UploadToServerScreen from './src/screens/UploadToServerScreen.js';

import ViewFilesScreen from './src/screens/ViewFilesScreen.js';


const Stack = createStackNavigator();
function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }}/>
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{ title: 'CreateAccount' }}/>

        <Stack.Screen name="HomePageScreen" component={HomePageScreen} options={{ title: 'Home' }}/>

        <Stack.Screen name="ServerSelectScreen" component={ServerSelectScreen} options={{ title: 'Server' }}/>
        <Stack.Screen name="SelectFileScreen" component={SelectFileScreen} options={{ title: 'Select a File' }}/>
        <Stack.Screen name="ViewSessionScreen" component={ViewSessionScreen} options={{ title: 'Current Session' }}/>


        <Stack.Screen name="UploadToServerScreen" component={UploadToServerScreen} options={{ title: 'Upload to Server' }}/>

        <Stack.Screen name="ViewFilesScreen" component={ViewFilesScreen} options={{ title: 'View Files' }}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


