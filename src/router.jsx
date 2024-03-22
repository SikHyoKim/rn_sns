import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomBottomTab from './components/CustomBottomTab';
import Home from './pages/Home';
import Splash from './pages/Splash';
import Add from './pages/Add';
import Play from './pages/Play';
import Mypage from './pages/Mypage';
import Search from './pages/Search';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBar = (props) => <CustomBottomTab {...props} />;

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="검색" component={Search} />
      <Tab.Screen name="추가" component={Add} />
      <Tab.Screen name="쇼츠" component={Play} />
      <Tab.Screen name="마이페이지" component={Mypage} />
      {/* <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="VideoPlayer" component={VideoPlayer} /> */}
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};

export default Router;
