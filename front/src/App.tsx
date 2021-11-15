import React, { useState } from 'react';
import {
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  SimpleCell,
} from '@vkontakte/vkui';
import { useLocation, useRouter } from '@happysanta/router';
import {
  VIEW_MAIN,
  PANEL_GUESS,
} from './router';
import Guess from './components/panels/Guess';
import './App.css';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  const { viewWidth } = useAdaptivity();
  const location = useLocation();
  const router = useRouter();

  return (
    <AppRoot>
      <SplitLayout>
        <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
          <View className="container" id={VIEW_MAIN} activePanel="PANEL_GUESS">
            <Guess id={PANEL_GUESS} />
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
