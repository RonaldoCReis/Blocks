import React from 'react';
import { RecoilRoot } from 'recoil';
import App from './App';
import '../index.css';

const AppContainer = () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};

export default AppContainer;
