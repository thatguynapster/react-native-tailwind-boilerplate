/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';


import {TailwindProvider} from 'tailwind-rn';
import MyComponent from './components/my-component';
import utilities from './tailwind.json';

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <MyComponent />
    </TailwindProvider>
  );
};

export default App;
