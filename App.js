import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './src/navigation/LoginStack';
import AppDrawer from './src/navigation/AppDrawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import { store, persistor } from './src/components/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
          {/* <NavigationContainer>
            {isLoggedIn ? (
              <AppDrawer />
            ) : (
              <LoginStack setIsLoggedIn={setIsLoggedIn} />
            )}
            <FlashMessage position='top' />
          </NavigationContainer> */}
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;