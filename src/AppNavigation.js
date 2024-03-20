import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigationBai1 from './BaiTap/Baitap1/TabNavigationBai1';
import TabNavigationBai2 from './BaiTap/BaiTap2/TabNavigationBai2';
import TabNavigationBai3 from './BaiTap/Baitap3/TabNavigationBai3';
import TabNavigationBai4 from './BaiTap/Baitap4/TabNavigationBai4';
const AppNavigation = () => {
  const shouldRenderBai1 = false;
  const shouldRenderBai3 = true;
  const shouldRenderBai4 = false;

  return (
    <NavigationContainer>
      {shouldRenderBai1 ? (
        <TabNavigationBai1 />
      ) : shouldRenderBai3 ? (
        <TabNavigationBai3 />
      ) : shouldRenderBai4 ? (
        <TabNavigationBai4 />
      ) : (
        <TabNavigationBai2 />
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
