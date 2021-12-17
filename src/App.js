import React from 'react';
import {Provider} from 'react-redux';

/* Import the Root Navigator */
import RootNavigator from './navigators';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
