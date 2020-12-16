import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';

const Home = ({ navigation }) => {
    return (
        <PaperProvider>
            <View>
                <Button style={Styles.button} onPress={() => navigation.navigate('DashBoard') }>
                    Go to Dashboard
            </Button>
            </View>
        </PaperProvider>
    )
}

const Styles = StyleSheet.create({
    button: {
        marginVertical:150,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home
