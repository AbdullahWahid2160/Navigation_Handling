import React from 'react';
import { View, Text } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons';

import Contacts from '../TabNavScreens/Contacts';
import Favorites from '../TabNavScreens/Favorites';

const Tab = createMaterialBottomTabNavigator();

const Profile = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#e91e63"
            style={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen name="Contacts" component={Contacts} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
            />
            <Tab.Screen name="Favorites" component={Favorites} options={{
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="heart" color={color} size={26} />
                ),
            }}
            
            />
        </Tab.Navigator>
    )
}

export default Profile
