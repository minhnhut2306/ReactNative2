import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigationBai1 from './BaiTap/Baitap1/TabNavigationBai1';
import TabNavigationBai2 from './BaiTap/BaiTap2/TabNavigationBai2';
import TabNavigationBai3 from './BaiTap/Baitap3/TabNavigationBai3';
const AppNavigation = () => {
    const shouldRenderBai1 = false;
    const shouldRenderBai3 = true; 

    return (
        <NavigationContainer>
            {shouldRenderBai1 ? (
                <TabNavigationBai1 />
            ) : shouldRenderBai3 ? (
                <TabNavigationBai3 />
            ) : (
                <TabNavigationBai2 />
            )}
        </NavigationContainer>
    );
};

export default AppNavigation;
