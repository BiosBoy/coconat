import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
import AppContainer from './container/index.js';

const ENTRY_POINT = document.querySelector('#react-app-root');

const render = () => {
  ReactDOM.render(
    <AppContainer />,
    ENTRY_POINT
  );
};

const renderError = error => {
  ReactDOM.render(
    <RedBox error={error} />,
    ENTRY_POINT
  );
};

// This code is excluded from production bundle
if (__DEV__) {
  // ========================================================
  // DEVELOPMENT STAGE! HOT MODULE REPLACE ACTIVATION!
  // ========================================================
  const devRender = () => {
    if (module.hot) {
      module.hot.accept(
        './container/index.js',
        () => render()
      );
    }

    render();
  };

  // Wrap render in try/catch
  try {
    devRender();
  } catch (error) {
    console.error(error);
    renderError(error);
  }
} else {
  // ========================================================
  // PRODUCTION GO!
  // ========================================================
  render();
}
