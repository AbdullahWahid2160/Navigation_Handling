import 'react-native-gesture-handler';

import React from 'react';

import { Image, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Screens/Home';
import DashBoard from './Screens/DrawerNavScreens/DashBoard';
import About from './Screens/DrawerNavScreens/About';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const DashBoardStack = createStackNavigator();
const AboutStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: '#009387'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: "Welcome!"
      }}
    />
  </HomeStack.Navigator>
);

const DashBoardStackScreen = ({ navigation }) => (
  <DashBoardStack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerLeft: null
    }}
  >
    <DashBoardStack.Screen
      name="DashBoard"
      component={DashBoard}
      options={{
        title: "DashBoard",
        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        )
      }}
    />
  </DashBoardStack.Navigator>
);

const AboutStackScreen = ({ navigation }) => (
  <AboutStack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerLeft: null
    }}
  >
    <AboutStack.Screen
      name="About"
      component={About}
      options={{
        title: "About",
        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        )
      }}
    />
  </AboutStack.Navigator>
);


const DetailsDrawer = ({ navigation }) => (
  <Drawer.Navigator initialRouteName="DashBoard">
    <Drawer.Screen name="DashBoard" component={DashBoardStackScreen} />
    <Drawer.Screen name="About" component={AboutStackScreen} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
          <Stack.Screen name="DashBoard" component={DetailsDrawer} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
