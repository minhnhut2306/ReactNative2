import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigationBai1 from './BaiTap/Baitap1/TabNavigationBai1';
import TabNavigationBai2 from './BaiTap/BaiTap2/TabNavigationBai2';

const AppNavigation = () => {
    
    const shouldRenderBai1 = true; 
    return (
        <NavigationContainer>
            {shouldRenderBai1 ? <TabNavigationBai2 /> : <TabNavigationBai1 /> }
        </NavigationContainer>
    );
};

export default AppNavigation;
